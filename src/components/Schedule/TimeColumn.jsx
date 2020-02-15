import React, { forwardRef } from 'react';
import { Mixins, SmallText as Text } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { DateHeader } from './DateHeader';

export const TimeColumn = forwardRef(({ slots }, ref) => {
    return (
        <Container>
            <DateHeader ref={ref} />
            {new Array(slots).fill().map((i, index) => (
                <Grid key={index}>
                    <SmallText size="0.65rem" margin="1px 6px" bold>
                        {(Math.floor(index / 2) + 8).toString().padStart(2, 0) %
                            24}
                        :{index % 2 ? '3' : '0'}0
                    </SmallText>
                </Grid>
            ))}
        </Container>
    );
});

const Container = styled.div`
    ${Mixins.flex('column')}
    ${({ theme }) => `
        background-color: ${theme.colors.input.default};
    `}
    width: 60px;
    min-width: 60px;
    position: sticky;
    z-index: 8;
    left: 0;
`;

const Grid = styled.div`
    ${Mixins.flex('flex-end', 'flex-start')}
    ${({ theme }) => `
        border-right: 1.5px solid ${Mixins.darken(
            theme.colors.input.default,
            0.05,
        )};
        border-bottom: 1.5px solid transparent;
        min-height: ${theme.dimensions.calendar.height}px;
        height: ${theme.dimensions.calendar.height}px;
    `}

    &:last-child {
        border-bottom: none;
    }
`;

const SmallText = styled(Text)`
    ${({ theme }) => `
        color: ${Mixins.darken(theme.colors.input.default, 0.3)};
    `}
`;
