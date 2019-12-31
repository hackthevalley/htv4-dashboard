import React, { useCallback, useMemo, useReducer } from 'react';
import styled from 'styled-components';
import { CalendarAlt } from 'styled-icons/fa-regular/CalendarAlt';
import { Mixins } from '@cheapreats/react-ui';
import { DashboardPage } from '../../../components';
import { Column } from './Column';
import { EventModal } from './EventModal';
import { TimeColumn } from './TimeColumn';
import { Timeline } from './Timeline';
import fullSchedule from './events';

const HEADER_HEIGHT = 50;
const ROW_HEIGHT = 100;

function reducer(state, action) {
    switch (action.type) {
        case 'show':
            return { ...state, show: true, event: action.event };
        case 'hide':
            return { ...state, show: false };
        default:
            return { ...state };
    }
}

export const Schedule = () => {
    const [modalState, dispatch] = useReducer(reducer, {
        show: false,
        event: null,
    });
    const showModal = useCallback(event => dispatch({ type: 'show', event }), [
        dispatch,
    ]);
    const hideModal = useCallback(() => dispatch({ type: 'hide' }), [dispatch]);
    const sched = useMemo(
        () =>
            fullSchedule.map(day => (
                <Column
                    key={day.date}
                    date={day.date}
                    events={day.events}
                    showModal={showModal}
                    headerHeight={HEADER_HEIGHT}
                    rowHeight={ROW_HEIGHT}
                />
            )),
        [showModal],
    );

    return (
        <DashboardPage heading="Schedule">
            <Layout>
                <TimeColumn
                    headerHeight={HEADER_HEIGHT}
                    rowHeight={ROW_HEIGHT}
                />
                <ColumnContainer>
                    {sched}
                    <Timeline
                        headerHeight={HEADER_HEIGHT}
                        rowHeight={ROW_HEIGHT}
                    />
                </ColumnContainer>
            </Layout>
            <EventModal
                state={[modalState.show, hideModal]}
                event={modalState.event}
            />
        </DashboardPage>
    );
};

Schedule.routeProps = {
    path: '/:id/schedule',
    Icon: CalendarAlt,
    exact: true,
};

const Layout = styled.div`
    display: flex;
    border: 2px solid lightgrey;
`;

const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    overflow: auto;
    ${Mixins.scroll}
`;
