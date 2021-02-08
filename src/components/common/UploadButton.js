import React from 'react';
import styled from 'styled-components';

// floating action button
const UploadButton = styled.a`
    color : #ffffff;
    position : fixed;
    z-index : 1;
    bottom : 36px;
    right : 36px;
`;

const UploadButtonBlock = () => {
    return (
        <>
            <a href = "/upload" />
        </>
    );
};

export default UploadButtonBlock;