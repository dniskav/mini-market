import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ShowMore from './ShowMore';
import CartControls from './CartControls';
import ProductCount from './ProductCount';


const StyleProductDetail = styled.div`
    & .title {
        color: #9E45BE;
        font-weight: 800;
        padding-left: 13px;
    }

    & .content {
        border-top: 1px solid #9E45BE;
        margin: 8px 10px 0px 0px;
        padding: 10px 0;
        max-width: 316px;
        display: flex;
        flex-direction: column;
    }
`;

const ProductDetail = () => {
    const pdd = useSelector(state => state.detailedItem);

    return (
        <StyleProductDetail className="product-detail">
            <h2 className="title">ProductDetail</h2>

            <div className="content">
                {typeof pdd.id !== 'undefined' ? 
                <div className="paper">
                    <ProductCount productId={pdd.id} />
                    <img className="pdd-image" src={pdd.img} />

                    <CartControls product={pdd} />

                    <span className="pdd-description">
                        <ShowMore data={pdd.description} />
                    </span>

                </div> 
                : 
                    <span>Please choose a product of the left</span>
                }
            </div>
        </StyleProductDetail>
    );
};

export default ProductDetail;
