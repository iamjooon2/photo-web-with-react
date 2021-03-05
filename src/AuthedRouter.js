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

    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {
        authService.onAuthStateChanged((user)=> {     // onAuthService에서 실제로 로그인 되어있는지 확인 가능
        if (user){
            setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        }); //init이 false면(==로그온 상태가 아니면) router를 숨기자
    }, []);

  return (
    <Router>
      <Switch>
        {isLoggedIn ? ( 
        <>
          <Route component = {MainPage} path ={['/', '/main']} exact />
          <Route component = {UploadPage} path ='/upload' />
          <Route component = {CommentPage} path = "/@:postId:AttachmentUrl" />
          <Route component= {NotFoundPage} path = '404' />
        </> ) : (
          <Route component = {LoginPage} exact path = {['/', '/main']} />
        )}
        </Switch>
    </Router>
  );
};

export default App;