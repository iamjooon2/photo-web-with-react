import React from 'react';
import {NavLink} from 'react-router-dom';
import './UploadButton.css';

const UploadButton = () => {
    return (
        <>
            <NavLink to ={'/upload'}> 
                <div className ='Button' />
            </NavLink>
        </>
    );
};

export default UploadButton;