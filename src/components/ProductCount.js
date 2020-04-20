import React from 'react';
import Pill from './Pill';
import { useSelector } from 'react-redux';

const ProductCount = ({ productId, showEmpty = true }) => {
    const quantity = useSelector(state => state.cart.filter(el => {
        return el.id === productId;
    }).length);

    return (
        <>
            {showEmpty || quantity ? 
                <Pill data={quantity || 0} />
            :
                null
            }
        </>
    );
};

export default ProductCount;
