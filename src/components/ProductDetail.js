import React from 'react';
import styled from 'styled-components';

const StyleProductDetail = styled.div`
    width: 330px;

    & .title {
        color: #9E45BE;
        font-weight: 800;
        padding-left: 13px;
    }

    & .content {
        border-top: 1px solid #9E45BE;
        margin: 8px 10px 0px 0px;
        padding-left: 13px;
    }
`;

const ProductDetail = () => {
    return (
        <StyleProductDetail>
            <h2 className="title">ProductDetail</h2>

            <div className="content">
                content
            </div>
        </StyleProductDetail>
    );
};

export default ProductDetail;
