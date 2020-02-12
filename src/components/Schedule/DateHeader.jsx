import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Mixins } from '@cheapreats/react-ui';
import moment from 'moment';

export const DateHeader = forwardRef(({ date }, ref) => {
    const m = moment(date);
    return date ? (
        <DateItem ref={ref} bold>
            {m.format('D MMMM')}
            <Weekday>{m.format('dddd')}</Weekday>
        </DateItem>
    ) : (
        <DateItem ref={ref} blank bold>
            &nbsp;
        </DateItem>
    );
});

const DateItem = styled.h2`
    ${({ theme }) => `
        background-color: ${theme.colors.input.default};
        border-bottom: 1.5px solid ${Mixins.darken(
            theme.colors.input.default,
            0.05,
        )};
        border-right: 1.5px solid ${Mixins.darken(
            theme.colors.input.default,
            0.05,
        )};
    `}
    padding: 20px 15px;
    box-sizing: border-box;
    position: sticky;
    font-size: 0.85rem;
    font-weight: bold;
    line-height: 1;
    margin: 0;
    z-index: 10;
    top: 0;
`;

const Weekday = styled.span`
    margin-left: 10px;
    ${({ theme }) => `
        color: ${Mixins.darken(theme.colors.input.default, 0.2)};
    `}
`;
