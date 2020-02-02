import React, { useMemo } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { SmallText } from '@cheapreats/react-ui';
import { Event } from './Event';

export const Column = ({
    date,
    events,
    showModal,
    headerHeight,
    rowHeight,
}) => {
    const boxes = useMemo(
        () => [...Array(24)].map((v, i) => <Box key={i} height={rowHeight} />),
        [rowHeight],
    );

    const eventComponents = useMemo(
        () =>
            calcEventSize(events).map((event, i) => (
                <Event
                    {...event}
                    key={i}
                    rowHeight={rowHeight}
                    onClick={() => showModal(event)}
                />
            )),
        [events, showModal, rowHeight],
    );

    return (
        <Layout>
            <Header height={headerHeight}>
                <HeaderText bold>
                    {moment.utc(date, 'DD/MM/YY').format('LL')}
                </HeaderText>
            </Header>
            <EventLayout>
                {eventComponents}
                {boxes}
            </EventLayout>
        </Layout>
    );
};

/**
 * This function adds a startTime, endTime, column, and overlaps property to each event.
 * Overlaps is the largest number of events that it overlaps with at a point in time
 * Column is the column the event will be in when it is displayed on the schedule.
 */
function calcEventSize(events) {
    events = events
        .map(event => {
            return {
                ...event,
                startTime: moment.utc(event.time[0], 'H:mm'),
                endTime: moment.utc(
                    event.time[1] === '24:00' ? '23:59' : event.time[1],
                    'H:mm',
                ),
                // moment.js treats '24:00' as '0:00' so instead we temporarily change it to '23:59'
            };
        })
        .sort((a, b) => (a.startTime < b.startTime ? -1 : 1));

    /**
     * We create groups on all events that overlap.
     * endTimes holds a column's latest event end time
     * overlapStartIndex is the index of the first event in the group
     * Once we iterate on an event that does not overlap with the group, we can set
     * the overlaps property on all events in the group so that we know the number
     * of columns in the group. This helps with figuring out the width of the event block
     */
    let endTimes = [];
    let overlapStartIndex = 0;
    for (let i = 0; i < events.length; i++) {
        events[i].column = 0;
        events[i].overlaps = 1;
        const s =
            events[i].startTime.hour() + events[i].startTime.minute() / 60;
        const e = events[i].endTime.hour() + events[i].endTime.minute() / 60;

        // if there is an overlap, then place the overlap in a group
        if (s < Math.max(...endTimes)) {
            let grouped = false;
            for (let j = 0; j < endTimes.length; j++) {
                if (!grouped && endTimes[j] <= s) {
                    grouped = true;
                    endTimes[j] = e;
                    events[i].column = j;
                    break;
                }
            }
            if (!grouped) {
                endTimes.push(e);
                events[i].column = endTimes.length - 1;
            }
        } else {
            for (let j = overlapStartIndex; j < i; j++) {
                events[j].overlaps = endTimes.length;
            }
            // reset groupings
            endTimes = [e];
            overlapStartIndex = i;
        }
    }
    for (let j = overlapStartIndex; j < events.length; j++) {
        events[j].overlaps = endTimes.length;
    }
    return events;
}

const Layout = styled.div`
    flex-grow: 2;
    min-width: 200px;
    border-left: 2px solid lightgrey;
    &:first-child {
        border-left: none;
    }
`;

const EventLayout = styled.div`
    position: relative;
`;

const Header = styled.div`
    border-bottom: 2px solid lightgrey;
    display: flex;
    align-items: center;
    ${({ height }) => `height: ${height}px;`}
`;

const HeaderText = styled(SmallText)`
    padding-left: 10px;
`;

const Box = styled.div`
    border-bottom: 2px solid lightgrey;
    &:last-child {
        border-bottom: none;
    }
    ${({ height }) => `height: ${height - 2}px;`}
`;
