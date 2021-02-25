import React from 'react';
import {NavLink} from 'react-router-dom';
import './UploadPageButton.css';

const UploadPageButton = () => {
    return (
        <>
            <NavLink to ={'/upload'}> 
                <div className ='Button' />
            </NavLink>
        </>
    );
};

export default UploadPageButton;