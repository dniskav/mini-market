import React, { useEffect } from 'react';
import 'reset-css';
import '../styles/basic.scss';
import MainContainer from '../components/MainContainer';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Products from '../components/Products';
import ProductDetail from '../components/ProductDetail';
import styled from 'styled-components';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';

const Breadcrumbs = styled.h1`
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 24px;
`;

const App = () => {
    const cartVisible = useSelector(state => state.showCart);
    const route = useSelector(state => state.route);

    return (
        <>
        <MainContainer>
            <header>
                <Breadcrumbs>Mini Market • {route}</Breadcrumbs>
                <Hero />
            </header>
            <Content className="content">
                <Products />
                {cartVisible ? 
                    <Cart />
                :
                    <ProductDetail />
                }
            </Content>
        </MainContainer>
        </>
    );
};

export default App;
