import React, { useRef } from 'react';
import styled from 'styled-components';
import { Mixins } from '@cheapreats/react-ui';
import { DateColumn } from './DateColumn';
import { TimeColumn } from './TimeColumn';
import { Line } from './Line';

export const Schedule = ({ schedule }) => {
    const dates = Object.values(schedule);
    const el = useRef();
    return (
        <Layout>
            <Content>
                <TimeColumn ref={el} />
                {dates.map((item, index) => (
                    <DateColumn item={item} key={index} />
                ))}
                <Line header={el} />
            </Content>
        </Layout>
    );
};

const Layout = styled.div`
    margin-right: auto;
    overflow: auto;
    ${Mixins.scroll}
    ${({ theme }) => `
        border: 1.5px solid ${Mixins.darken(theme.colors.input.default, 0.05)};
    `}
    max-width: 100%;
`;

const Content = styled.div`
    flex-grow: 1;
    ${Mixins.flex()}
    align-items: end;
    align-self: end;
    position: relative;
`;
