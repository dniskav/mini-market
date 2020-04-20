import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { proceedCheckout, clearCart } from '../Actions/cart';
import TotalPrice from './TotalPrice';

const ClearCart = styled.button`
    display: flex;
    background-color: #9E45BE;
    color: white;
    height: 38px;
    min-width: 38px;
    font-size: 18px;
    border: 1px solid transparent;
    justify-content: center;
`;

const Controls = styled.div`
    display: flex;
`;

const StyledTotalAmount = styled.button`
    display: flex;
    background-color: #9E45BE;
    color: white;
    height: 38px;
    min-width: 94px;
    font-size: 18px;
     &.active {
        background-color: #F6E8FA;
        border: 1px solid #9E45BE;
        color: #9E45BE;
     }
`;



const TotalAmount = () => {
    const isActive = useSelector(state => state.showCart);
    const dispatch = useDispatch();
    const checkout = () => {
        dispatch(proceedCheckout());
    };

    const removeAllItems = () => {
        dispatch(clearCart());
    };

    return (
        <Controls>
            <StyledTotalAmount onClick={checkout} className={isActive ? 'active' : ''}>
                <i className="fas fa-shopping-cart"></i>
                <span className="value"><TotalPrice /></span>
            </StyledTotalAmount>
            {isActive &&
            <ClearCart onClick={removeAllItems}>
            X
            </ClearCart>
            }
        </Controls>
    );
};

export default TotalAmount;
