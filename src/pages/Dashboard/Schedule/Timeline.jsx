import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

export const Timeline = ({ headerHeight, rowHeight }) => {
    const now = moment();
    const top = headerHeight + (now.hour() + now.minute() / 60) * rowHeight;
    return <StyledHr top={top} />;
};

const StyledHr = styled.hr`
    border-width: 1px 0px;
    border-style: solid;
    border-color: #00e2ef;
    background-color: #00e2ef;
    height: 2px;
    width: 100%;
    position: absolute;
    ${({ top }) => `top: ${top - 6}px;`}
`;
