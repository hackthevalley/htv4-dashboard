import React from 'react';
import { CalendarAlt } from 'styled-icons/fa-regular/CalendarAlt';
import { DashboardPage } from '../../components';

export const Schedule = () => {
    return <DashboardPage heading="Schedule"></DashboardPage>;
};

Schedule.routeProps = {
    path: '/:id/schedule',
    Icon: CalendarAlt,
    exact: true,
};
