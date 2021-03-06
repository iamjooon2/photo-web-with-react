import React from 'react';
import {useHistory} from 'react-router-dom';
import {authService, firebaseInstance} from '../../fbase';
import './OAuth.css';

const OAuth = () => {

  const onGoogleClick = async (event) => {
    let provider = new firebaseInstance.auth.GoogleAuthProvider();
    const data = await authService.signInWithPopup(provider);
  } 

  const history = useHistory();
  
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  }

  return (
    <>
    <div className ='login_container'>
      <div onClick={onGoogleClick} className="authBox" >
          Continue with Google 
      </div>
    </div>
    </>
  );
};

export default OAuth;