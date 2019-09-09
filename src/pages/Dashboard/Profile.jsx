import React from 'react';
import { AddressCard } from 'styled-icons/fa-regular/AddressCard';
import { DashboardPage } from '../../components';

export const Profile = () => {
    return <DashboardPage heading="Profile"></DashboardPage>;
};

Profile.routeProps = {
    path: '/:id',
    Icon: AddressCard,
    exact: true,
};
