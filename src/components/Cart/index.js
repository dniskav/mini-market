import React from 'react';
import { useSelector } from 'react-redux';
import { total } from '../TotalPrice';
import Wompi from '../Wompi';
import { CartGrid } from '../CartGrid';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const consolidatedCart = cart.filter((a, b) => cart.findIndex(i => i.id === a.id) === b);

    return (
        <div className="cart">
            <h2 className="title">Shopping Cart</h2>

            <div className="content">
                <div className="paper">
                    <CartGrid cart={consolidatedCart} />

                    <span className="total">
                        <span className="label">Total: </span>
                        <span className="price">
                            <span className="value">{total}</span>
                        </span>
                    </span>

                    <Wompi />
                </div>
            </div>
        </div>
    );
};

export default Cart;
