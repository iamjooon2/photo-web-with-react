import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import UploadPage from './pages/UploadPage';
import CommentPage from './pages/CommentPage';
import './App.css';

const App = () => {
    return (
        <>
            <div className = 'app'>
                <Route component = {LoginPage} path ='/login'/>
                <Route component = {MainPage} path ={['/', '/main']} exact />
                <Route component = {UploadPage} path = '/upload' />
                <Route component = {CommentPage} path = '/comment' />
            </div>
        </>
    );
};
 
export default App;