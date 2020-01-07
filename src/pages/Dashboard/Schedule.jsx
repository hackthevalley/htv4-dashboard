import React from 'react';
import { CalendarAlt } from 'styled-icons/fa-regular/CalendarAlt';
import { Paragraph } from '@cheapreats/react-ui';
import { DashboardPage } from '../../components';

export const Schedule = () => {
    return (
        <DashboardPage heading="Schedule">
            <Paragraph color="secondary" size="1.4rem" margin="-25px 0 0" bold>
                Coming Soon...
            </Paragraph>
        </DashboardPage>
    );
};

Schedule.routeProps = {
    path: '/:id/schedule',
    icon: CalendarAlt,
    exact: true,
};
