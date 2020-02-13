import React from 'react';
import { Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { DateHeader } from './DateHeader';
import { Event } from './Event';

const flat = list => {
    return list.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flat(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
};

const init = ({ events }) => {
    const map = [];
    events.forEach(event => {
        const from = parseInt(event.time[0].split(':')[0]);
        const to = parseInt(event.time[1].split(':')[0]);
        (map[from % 24] || (map[from % 24] = [])).push(1);
        (map[to % 24] || (map[to % 24] = [])).push(-1);
    });

    const start = parseInt(events[0].time[0].split(':')[0]) % 24;
    const res = flat(map.concat(map.splice(0, start)));
    let indent = -1;

    return events.map(event => {
        while (res.shift() === -1) {
            indent = -1;
        }
        indent++;
        event.indent = indent;
        return event;
    });
};

export const DateColumn = ({ item }) => {
    const events = init(item);
    return (
        <Container>
            <DateHeader date={item.date} />
            <Content>
                {new Array(36).fill().map((i, index) => (
                    <Grid key={index} />
                ))}
                {events.map((event, index) => (
                    <Event event={event} key={index} />
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.div`
    ${Mixins.flex('column')}
    ${({ theme }) => `
        width: ${theme.dimensions.calendar.width}px;
        min-width: ${theme.dimensions.calendar.width}px;
    `}
`;

const Content = styled.div`
    position: relative;
`;

const Grid = styled.div`
    ${({ theme }) => `
        border-right: 1.5px solid ${Mixins.darken(
            theme.colors.input.default,
            0.05,
        )};
        border-bottom: 1.5px solid ${Mixins.darken(
            theme.colors.input.default,
            0.05,
        )};
        min-height: ${theme.dimensions.calendar.height}px;
        height: ${theme.dimensions.calendar.height}px;
    `}
`;
