import React from 'react';
import { useDispatch } from 'react-redux';
import { showInDetailsView } from '../Actions/cart';
import styled from 'styled-components';
import productList from '../helpers/productsList';
import ProductCount from './ProductCount';

const ShowDetails = styled.button`
    border: none;
    background: none;
`;

const Products = () => {
    const dispatch = useDispatch();
    return (
        <div className="products-container">
            <h2 className="title">Store</h2>

            <div className="content">
                <ul className="grid-gallery">
                    {productList.map( e => (
                        <li key={e.id} className={`grid-gallery__item level-${e.imgHeight}`}>
                            <ProductCount productId={e.id} showEmpty={false} />
                            <ShowDetails onClick={() => dispatch(showInDetailsView(e))}>
                                <img className="grid-gallery__image" src={e.img} />
                            </ShowDetails>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Products;
