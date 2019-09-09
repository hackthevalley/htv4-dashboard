import React from 'react';
import { Heading } from '@cheapreats/react-ui';

export const DashboardPage = ({ children, heading = '', ...props }) => {
    return (
        <section {...props}>
            <Heading bold>{heading}</Heading>
            {children}
        </section>
    );
};
