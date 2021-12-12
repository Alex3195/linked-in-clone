import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBRDbg3AG0740ueenGLxD2MRMBjHX3iak8",
    authDomain: "linkedin-clone-yt-6e2eb.firebaseapp.com",
    projectId: "linkedin-clone-yt-6e2eb",
    storageBucket: "linkedin-clone-yt-6e2eb.appspot.com",
    messagingSenderId: "1066002667326",
    appId: "1:1066002667326:web:48f88a3dcd35b7b7027e6f"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);
const colRef = collection(db, 'post');
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in');
    } else {
        console.log('No user', user);
    }
});
const signIn = (email, password) => {
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            console.log(user);
        }).catch(err=>{
            console.error(err);
        })
}
export { db, auth, firebaseApp, colRef, signIn };