import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import UploadPage from '../pages/UploadPage';
import LoginPage from '../pages/LoginPage';

const Routing = () => {
  
  let loggedIn = true;

  return (
    <>
      <Route>
        <Switch>
          {loggedIn ? (
                <>
                    <Route component = {UploadPage} path = '/upload' />
                </> ): (
                    <Route component = {LoginPage} path = '/login'/>
                )
            }
          </Switch>
      </Route>
    </>
  );
};

export default Routing;