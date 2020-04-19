import React from 'react';
import { useDispatch } from 'react-redux';
import { showInDetailsView } from '../Actions/cart';
import styled from 'styled-components';

const ShowDetails = styled.button`
    border: none;
    background: none;
`;

const productList = [
    { id: 0, name: 'Leche', brand: 'Alqueria', stock: 10, price: '1.5', img: 'src/assets/products/leche.png', imgHeight: 3 },
    { id: 6, name: 'Jamon Pietran', brand: 'Nutresa', stock: 15, price: '2.3', img: 'src/assets/products/jamon.png', imgHeight: 2 },
    { id: 11, name: 'Atún lomitos en agua', brand: 'Van Camps', stock: 10, price: '5.5', img: 'src/assets/products/atun2.png', imgHeight: 1 },
    { id: 5, name: 'Doritos', brand: 'Margarita', stock: 15, price: '1.3', img: 'src/assets/products/doritos.png', imgHeight: 3 },
    { id: 7, name: 'Salchichas Ranchera', brand: 'Ranchera', stock: 14, price: '3.2', img: 'src/assets/products/salchichas1.png', imgHeight: 2 },
    { id: 1, name: 'De Todito', brand: 'Super rica', stock: 20, price: '1', img: 'src/assets/products/detodito1.png', imgHeight: 3 },
    { id: 9, name: 'Salchichas Viena', brand: 'Zenu', stock: 40, price: '4.2', img: 'src/assets/products/salchichas3.png', imgHeight: 2 },
    { id: 4, name: 'Zucaritas', brand: 'Kellogs', stock: 15, price: '2.3', img: 'src/assets/products/zucaritas.png', imgHeight: 3 },
    { id: 8, name: 'Salchichas Tradicional', brand: 'Zenu', stock: 4, price: '3', img: 'src/assets/products/salchichas2.png', imgHeight: 2 },
    { id: 2, name: 'De Todito', brand: 'Super rica', stock: 20, price: '1', img: 'src/assets/products/detodito2.png', imgHeight: 3 },
    { id: 10, name: 'Atún Claro', brand: 'Isabel', stock: 20, price: '5.2', img: 'src/assets/products/atun1.png', imgHeight: 2 },
    { id: 3, name: 'Milo', brand: 'Nestle', stock: 30, price: '4', img: 'src/assets/products/milo.png', imgHeight: 3 },
];

const Products = () => {
    const dispatch = useDispatch();
    return (
        <div className="products-container">
            <h2 className="title">Store</h2>

            <div className="content">
                <ul className="grid-gallery">
                    {productList.map( e => (
                        <li key={e.id} className={`grid-gallery__item level-${e.imgHeight}`}>
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
