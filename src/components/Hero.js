import React from 'react';
import Logo from './Logo';
import TotalAmount from './TotalAmount';
import styled from 'styled-components';

const StyledHero = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`;
const Hero = () => (
    <StyledHero>
        <Logo />
        <TotalAmount />
    </StyledHero>
);

export default Hero;
