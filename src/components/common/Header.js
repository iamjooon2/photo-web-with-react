import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './button';

const HeaderBlock = styled.div`
    position : fixed;
    width: 100%;
    background : #ffffff;
    box-shadow : 0px 1px 1px;
`;

const Wrapper = styled(Responsive)`
    height : 5rem;
    display : flex;
    align-items : center;
    justify-content: space-between; 
    /* */
    .logo {
        font-size : 1.5rem;
        font-weight : 800;
        letter-spacing : 2px;
        cursor : pointer;
    }

    .right {
        display : flex;
        align-items: center;
    }
`;

/* 헤더가 fixed라 페이지 컨텐츠가 height값만큼 밑에 나오게 하는 컴포넌트 */
const Spacer = styled.div`
    height: 5rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className ="left-side-block"></div>
                    <div className="logo">photo-web</div>
                    <div className="right">
                        <Button>로그인</Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;