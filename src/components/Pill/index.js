import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPill = styled.div`
    background: #9E45BE;
    color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

const Pill = ({ data }) => (
    <StyledPill className="pill">
        {data}
    </StyledPill>
);

Pill.propTypes = {
    data: PropTypes.any,
}

export default Pill;
