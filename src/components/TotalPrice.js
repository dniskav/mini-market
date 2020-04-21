import React from 'react';
import { useSelector } from 'react-redux';

export let total = 0;

const TotalPrice = () => {
    total = useSelector(state => state.cart.reduce((acum, el) => {
        if(el.price) {
            return acum + parseFloat(el.price);
        }

        return acum;
    }, 0).toFixed(2));

    return (
        <>
            {total}
        </>
    );
};

export default TotalPrice;
