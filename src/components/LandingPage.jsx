import React from 'react';

export const LandingPage = ({ children, ...props }) => {
    return <section {...props}>{children}</section>;
};
