import React from 'react';
import styled from 'styled-components';

const StyledTotalAmount = styled.button`
    display: flex;
    background-color: #9E45BE;
    color: white;
    height: 38px;
    min-width: 94px;
    font-size: 18px;
`;

const TotalAmount = () => {
    return (
        <StyledTotalAmount onclick={() => {}}>
            <i className="fas fa-shopping-cart"></i>
            <span className="value">29.99</span>
        </StyledTotalAmount>
    );
};

export default TotalAmount;
