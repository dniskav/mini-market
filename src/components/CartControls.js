import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Actions/cart';
import styled from 'styled-components';

const StyledControls = styled.span`
    width: 80px;
    white-space: nowrap;
`;

const CartControls = ({ product }) => {
    const dispatch = useDispatch();

    const addProductCart = (product) => {
        dispatch(addToCart(product));
    };

    const removeProductCart = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="pdd-controls">
            <span>
                <span className="pdd-name">{product.name}</span>
                <span className="pdd-price">{product.price}</span>
            </span>
            <StyledControls>
                <input className="button button-gray" type="button" value="-" onClick={() => {removeProductCart(product)}}/>
                <input className="button button-purple" type="button" value="+" onClick={() => {addProductCart(product)}} />
            </StyledControls>
        </div>
    );
};

export default CartControls;
