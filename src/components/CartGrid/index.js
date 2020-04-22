import React from 'react';
import PropTypes from 'prop-types';
import ProductCount from '../ProductCount';

export const CartGrid = ({ cart = [] }) => {
    if(!Array.isArray(cart) || cart.length <= 0) {
        return (<span>Cart Empty</span>);
    };
    
    return (
        <ul className="cart-product">
            {cart.map( item => (
                <li key={item.id} className="cart-product__row">
                    <div className="relative-pill">
                        <ProductCount productId={item.id} showEmpty={false} />
                    </div>
                    <img src={item.img} />
                </li>
                )
            )}
        </ul>
    );
};

CartGrid.propTypes = {
    cart: PropTypes.array,
};

export default CartGrid;
