import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import UploadPage from './pages/UploadPage';
import CommentPage from './pages/CommentPage';
import NotFoundPage from './pages/NotFoundPage';
import {authService} from './fbase';
import './App.css';

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <Route component = {MainPage} path ={['/', '/main']} exact />
            <Route component = {LoginPage} path ='/login' />
            <Route component = {UploadPage} path ='/upload' />
            <Route component = {CommentPage} path = '/comment' />    
            <Route component= {NotFoundPage} path = '404' />
        </>
    );
};
 
export default App;