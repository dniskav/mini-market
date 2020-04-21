import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    max-width: 810px;
    margin: 0 auto;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.3);
    padding: 28px 22px;
    box-sizing: border-box;
    background-color: #fff;
`;

const MainContainer = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default MainContainer;
