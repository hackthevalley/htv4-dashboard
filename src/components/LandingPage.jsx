import React from 'react';
import styled from 'styled-components';
import { Mixins } from '@cheapreats/react-ui';

export const LandingPage = ({ children, ...props }) => {
    return <StyledSection {...props}>{children}</StyledSection>;
};

const StyledSection = styled.section`
    flex-grow: 1;
    width: 20%;
    padding: 12px 20px;

    ${Mixins.transition(['opacity'])}
    ${({ transition }) => (transition ? `opacity: 1` : `opacity: 0`)};
s`;
