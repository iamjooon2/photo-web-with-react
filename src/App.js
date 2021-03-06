import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import UploadPage from './pages/UploadPage';
import CommentPage from './pages/CommentPage';
import NotFoundPage from './pages/NotFoundPage';
import {authService} from './fbase';
import './App.css';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(()=> {
      authService.onAuthStateChanged((user)=> {     // onAuthService에서 실제로 로그인 되어있는지 확인 가능
        if (user){
            setIsLoggedIn(true);
            } else {
             setIsLoggedIn(false); 
            }
        }); //setInit이 false면 router 자체를 숨길 수도 있음
    }, []);

  return (
    <>
    {isLoggedIn ? ( 
      <>
        <Route component = {MainPage} path ={['/', '/main']} exact />
        <Route component = {UploadPage} path ='/upload' />
        <Route component = {CommentPage} path = "/@:postId:AttachmentUrl"  />
        <Route component= {NotFoundPage} path = '404'  />
        <Route component = {MainPage} path = '/login' />
      </> ) : (
        <Route component = {LoginPage} exact path = {['/', '/main', '/upload', '/login']} />
      )}
    </>
    
  );
};

export default App;