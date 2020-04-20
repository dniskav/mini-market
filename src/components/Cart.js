import React from 'react';
import { useSelector } from 'react-redux';
import ProductCount from './ProductCount';
import TotalPrice from './TotalPrice';

function removeDuplicates(array) {
    return array.filter((a, b) => array.findIndex(i => i.id === a.id) === b);
}

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const consolidateCart = cart.filter((a, b) => cart.findIndex(i => i.id === a.id) === b);

    return (
        <div className="cart">
            <h2 className="title">Shopping Cart</h2>

            <div className="content">
                <div className="paper">
                    <ul className="cart-product">
                        {consolidateCart.map( item => <li key={item.id} className="cart-product__row">
                            <div className="relative-pill">
                                <ProductCount productId={item.id} showEmpty={false} />
                            </div>
                            <img src={item.img} />
                        </li>)}
                    </ul>
                    
                    <span className="total">
                        <span className="label">Total: </span>
                        <span className="price">
                            <span className="value"><TotalPrice /></span>
                        </span>
                    </span>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;
