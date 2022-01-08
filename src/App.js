import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, selectUser } from './features/userSlice';
import Feed from './feed/Feed';
import { auth } from './firebase/firebaseJs';
import Header from './header/Header';
import Login from './login/Login';
import SideBar from './sidebar/SideBar';
import { onAuthStateChanged } from "firebase/auth";
import Widget from './widget/Widget';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch(login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }))
        // ...
      } else {
        // User is signed out
        // ...
        // dispatch(logout())
      }
    });

  }, [])
  return (
    <div className="app">
      <Header />

      {
        !user ? (
          <Login />
        ) : (
          <div className='app_body'>
            <SideBar />
            <Feed />
            <Widget />
          </div>
        )
      }
    </div>
  );
}

export default App;
