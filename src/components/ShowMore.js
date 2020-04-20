import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    overflow: hidden;
    box-sizing: border-box;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    &.expanded {
        -webkit-line-clamp: initial;
    }
`;

const Trigger = styled.div`
    position: absolute;
    bottom: -12px;
    width: 100%;
    text-align: center;
    cursor: pointer;
`;

const ShowMore = ({ data }) => {
    const [showMore, setShowMore] = useState(false);

    const sm = () => {
        setShowMore(!showMore);
    };

    return (
    <>
        <Container className={showMore ? 'expanded' : ''}>
            {data}
        </Container>
        <Trigger onClick={() => {sm()}}>{showMore ? '▴' : '▾'}</Trigger>
    </>
    );
};

export default ShowMore;
