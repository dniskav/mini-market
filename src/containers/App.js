import React from 'react';
import 'reset-css';
import '../styles/basic.scss';
import MainContainer from '../components/MainContainer';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Products from '../components/Products';
import ProductDetail from '../components/ProductDetail';
import styled from 'styled-components';

const Breadcrumbs = styled.h1`
    text-align: center;
    font-size: 22px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 24px;
`;

const App = () => {

    return (
        <>
        <Breadcrumbs>Mini Market • Product Detail</Breadcrumbs>
        <MainContainer>
            <Hero />
            <Content>
                <Products />
                <ProductDetail />
            </Content>
        </MainContainer>
        </>
    );
};

export default App;
