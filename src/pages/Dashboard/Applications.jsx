import React from 'react';
import { FileAlt } from 'styled-icons/fa-regular/FileAlt';
import { DashboardPage } from '../../components';

export const Applications = () => {
    return <DashboardPage heading="Applications"></DashboardPage>;
};

Applications.routeProps = {
    path: '/:id/app',
    Icon: FileAlt,
    exact: true,
};
