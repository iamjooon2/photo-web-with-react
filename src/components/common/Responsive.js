import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    display : flex;
    padding-left : 1rem;
    padding-right : 1rem;
    width: 1024px;
    margin : 0 auto;
    
    @media(max-width: 1024px){
        width: 768px;
    }

    @media(max-width : 768px){
        width: 100%;
    }
`;

const Responsive = ({children, ...rest}) => {
    // style, onClick, onMouseMove등의 props 사용가능하게끔
    // rest 이용 ResponsiveBlock에게 전달
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
};

export default Responsive;