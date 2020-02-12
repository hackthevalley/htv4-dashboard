import React from 'react';
import styled from 'styled-components';
import { CalendarAlt } from 'styled-icons/fa-regular/CalendarAlt';
import { Mixins } from '@cheapreats/react-ui';
import {
    DashboardPage as Page,
    Schedule as ScheduleComponent,
} from '../../../components';
import { schedule } from '../../../schedule';

export const Schedule = () => {
    return (
        <DashboardPage heading="Schedule">
            <ScheduleComponent schedule={schedule} />
        </DashboardPage>
    );
};

Schedule.routeProps = {
    path: '/:id/schedule',
    icon: CalendarAlt,
    exact: true,
};

const DashboardPage = styled(Page)`
    height: 100vh;
    box-sizing: border-box;
    overflow: unset;
    min-width: 1px;
    ${Mixins.flex('column')}
`;
