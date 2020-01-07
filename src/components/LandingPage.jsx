import React from 'react';
import styled from 'styled-components';
import { Mixins, Loading } from '@cheapreats/react-ui';

export const LandingPage = ({ children, ...props }) => {
    return <Container {...props}>{children}</Container>;
};

const Container = styled(Loading)`
    ${Mixins.flex('center')}
    height: 100vh;
s`;
