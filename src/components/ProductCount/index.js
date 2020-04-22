import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Pill from '../Pill';

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

ProductCount.propTypes = {
    productId: PropTypes.number,
    showEmpty: PropTypes.bool,
};

export default ProductCount;
