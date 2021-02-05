import React from 'react';
import styled from 'styled-components';

// floating action button
const UploadButton = styled.div`
    display : flex;
    right : 0;
    bottom : 0;
    width: 88px;
    height: 88px;
    border-radius: 45%;
    background-color:white;
    box-shadow : 1px 1px 1px rgba(0, 0, 0, 0.5);
    cursor: pointer; 
    align-items : center;
`;

const UploadButtonBlock = () => {
    return (
        <>
            <UploadButton />
        </>
    );
};

export default UploadButtonBlock;