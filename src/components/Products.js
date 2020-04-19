import React from 'react';
import styled from 'styled-components';

const StyledProducts = styled.div`
    width: 424px;
    margin-right: 12px;

    & .title {
        color: #9E45BE;
        font-weight: 800;
    }

    & .content {
        border-top: 1px solid #9E45BE;
        margin: 8px 10px 0px 0px;
    }
`;

const productList = [
    { id: 0, name: 'Leche', brand: 'Alqueria', stock: 10, price: '1.5', img: 'src/assets/products/leche.png' },
    { id: 1, name: 'De Todito', brand: 'Super rica', stock: 20, price: '1', img: 'src/assets/products/detodito1.png' },
    { id: 2, name: 'De Todito', brand: 'Super rica', stock: 20, price: '1', img: 'src/assets/products/detodito2.png' },
    { id: 3, name: 'Milo', brand: 'Nestle', stock: 30, price: '4', img: 'src/assets/products/milo.png' },
    { id: 4, name: 'Zucaritas', brand: 'Kellogs', stock: 15, price: '2.3', img: 'src/assets/products/zucaritas.png' },
    { id: 5, name: 'Doritos', brand: 'Margarita', stock: 15, price: '1.3', img: 'src/assets/products/doritos.png' },
    { id: 6, name: 'Jamon Pietran', brand: 'Nutresa', stock: 15, price: '2.3', img: 'src/assets/products/jamon.png' },
    { id: 7, name: 'Salchichas Ranchera', brand: 'Ranchera', stock: 14, price: '3.2', img: 'src/assets/products/salchichas1.png' },
    { id: 8, name: 'Salchichas Tradicional', brand: 'Zenu', stock: 4, price: '3', img: 'src/assets/products/salchichas2.png' },
    { id: 9, name: 'Salchichas Viena', brand: 'Zenu', stock: 40, price: '4.2', img: 'src/assets/products/salchichas3.png' },
    { id: 10, name: 'Atún Claro', brand: 'Isabel', stock: 20, price: '5.2', img: 'src/assets/products/atun1.png' },
    { id: 10, name: 'Atún lomitos en agua', brand: 'Van Camps', stock: 10, price: '5.5', img: 'src/assets/products/atun2.png' },
];

const Products = () => {
    return (
        <StyledProducts>
            <h2 className="title">Store</h2>

            <div className="content">
                content
            </div>
        </StyledProducts>
    );
};

export default Products;
