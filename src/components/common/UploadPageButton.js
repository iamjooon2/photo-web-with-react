import React from 'react';
import {Link} from 'react-router-dom';
import './UploadPageButton.css';

const UploadPageButton = () => {
    return (
        <>
            <Link to ='/upload'> 
                <div className ='Button' />
            </Link>
        </>
    );
};

export default UploadPageButton;