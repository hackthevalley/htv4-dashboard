import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Mixins } from '@cheapreats/react-ui';

export const Line = ({ header }) => {
    const [top, setTop] = useState(0);
    useEffect(() => {
        const handler = () => {
            const now = new Date();
            const hours = now.getHours();
            const cells =
                (hours < 8 ? hours + 16 : hours - 8) * 2 +
                now.getMinutes() / 30;
            setTop(cells);
        };

        const timer = window.setInterval(() => {
            handler();
        }, 3000);
        handler();

        return () => window.clearInterval(timer);
    }, []);

    console.log(header, top);

    return (
        top >= 0 && (
            <HLine offset={(header.current || {}).offsetHeight} top={top}>
                <Dot />
            </HLine>
        )
    );
};

const HLine = styled.div`
    ${Mixins.flex()}
    ${({ theme, offset = 0, top }) => `
        border: 1.5px solid ${theme.colors.primary};
        ${Mixins.position(
            'absolute',
            'auto 0 auto 60px',
            `${(theme.dimensions.calendar.height + 1.5) * top + offset}px`,
            0,
            'auto',
        )}
    `}
    z-index: 9;
`;

const Dot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    ${Mixins.position('absolute', '-5.5px auto auto -8px', 'auto')}
    ${({ theme }) => `
        background-color: ${theme.colors.primary};
    `}
`;
