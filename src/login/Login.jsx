import React, { useState } from 'react'
import '../styles/Login.css';
import iconLinkedIn from '../icons/PikPng.com_linkedin-png_533354.png';
import { auth, signIn } from '../firebase/firebaseJs';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { login } from '../features/userSlice';
function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [picUrl, setPicUrl] = useState("")
    const dispatch = useDispatch();
    const register = () => {
        if (!name) {
            return alert("Please enter full name")
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userDetails) => {
                const user = userDetails.user;
                console.log(user);
                user.displayName = name;
                user.photoURL = picUrl;
                console.log(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: picUrl
                }).then(() => {
                    dispatch(login({
                        uid: user.uid,
                        email: user.email,
                        displayName: name,
                        photoURL: picUrl,


                    }))
                })
            }).catch(error => {
                console.log(error);
            })

    }

    const loginToApp = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return alert("Please enter email and password")
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(login({
                    uid: userAuth.user.uid,
                    email: userAuth.user.email,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            })
    }
    return (
        <div className='login'>
            <img src={iconLinkedIn} alt='icon linked in' />
            <form>
                <input
                    type='text'
                    name='fullName'
                    value={name}
                    onChange={e => { setName(e.target.value) }}
                    placeholder='Full Name'
                />
                <input
                    type='text'
                    name='picUrl'
                    value={picUrl}
                    onChange={e => { setPicUrl(e.target.value) }}
                    placeholder='Profile pic URL'
                />
                <input
                    id="email"
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                    placeholder='Email'
                />
                <input
                    id="password"
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => { setPassword(e.target.value) }}
                    placeholder='Password'
                />
                <button onClick={loginToApp}>Sign in</button>

            </form>
            <p>Not a member?{"  "}
                <span className='login_register' onClick={register}>Register now</span>
            </p>
        </div>
    )
}

export default Login
