import React from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
    const total = useSelector(state => state.cart.reduce((acum, el) => {
        if(el.price) {
            return acum + parseFloat(el.price);
        }

        return acum;
    }, 0));

    return (
        <>
            {total.toFixed(2)}
        </>
    );
};

export default TotalPrice;
