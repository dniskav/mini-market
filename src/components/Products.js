import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showInDetailsView, startGetProducts } from '../Actions/cart';
import styled from 'styled-components';
import ProductCount from './ProductCount';

const Spinner = styled.img`
    max-width: 300px;
    margin: 0 auto;
    display: block;
`;

const ShowDetails = styled.button`
    border: none;
    background: none;
`;

const Products = () => {
    const loading = useSelector( state => state.fetchingProducts);
    const products = useSelector( state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetProducts());
    }, []);

    return (
        <div className="products-container">
            <h2 className="title">Store</h2>

            <div className="content">
                <ul className="grid-gallery">
                {loading ? 
                    (<Spinner src="assets/spinner.gif" />)
                    : 
                    (products.map( e => (
                        <li key={e.id} className={`grid-gallery__item level-${e.imgHeight}`}>
                            <ProductCount productId={e.id} showEmpty={false} />
                            <ShowDetails onClick={() => dispatch(showInDetailsView(e))}>
                                <img className="grid-gallery__image" src={e.img} />
                            </ShowDetails>
                        </li>)
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Products;
