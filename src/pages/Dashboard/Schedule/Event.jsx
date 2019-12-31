import React from 'react';
import styled from 'styled-components';
import { Card, Paragraph } from '@cheapreats/react-ui';

export const Event = ({
    title,
    startTime,
    endTime,
    background,
    primary,
    overlaps,
    column,
    rowHeight,
    onClick,
}) => {
    const top = (startTime.hour() + startTime.minute() / 60) * rowHeight;
    const height =
        (endTime.hour() -
            startTime.hour() +
            (endTime.minute() - startTime.minute()) / 60) *
        rowHeight;
    const s = startTime.format('h:mma');
    const e = endTime.format('h:mma');
    return (
        <Container
            onClick={onClick}
            key={title}
            overlaps={overlaps}
            column={column}
            top={top}
            height={height}
            background={background}
        >
            <TextContainer>
                <StyledParagraph align="left" color={primary}>
                    {title}
                </StyledParagraph>
                <StyledParagraph align="right" color={primary}>
                    {s} - {e === '11:59pm' ? '12:00pm' : e}
                </StyledParagraph>
            </TextContainer>
        </Container>
    );
};

const Container = styled(Card)`
    cursor: pointer;
    position: absolute;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    ${({ top, height, background, overlaps, column }) => `
        top: ${top}px;
        height: ${height - 12}px;
        background-color: ${background};
        width: calc(${100 / overlaps}% - 12px);
        left: calc(${(100 / overlaps) * column}% + 1px);
    `}
`;

const TextContainer = styled.div`
    padding: 0 5px;
`;

const StyledParagraph = styled(Paragraph)`
    font-size: 0.75rem;
    ${({ color }) => `color: ${color};`}
`;
