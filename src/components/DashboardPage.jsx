import React from 'react';
import styled from 'styled-components';
import { Heading, Loading, Mixins } from '@cheapreats/react-ui';

export const DashboardPage = ({ children, heading = '', ...props }) => {
    return (
        <StyledSection {...props}>
            <Heading bold>{heading}</Heading>
            {children}
        </StyledSection>
    );
};

const StyledSection = styled(Loading)`
    flex-grow: 1;
    padding: 12px 20px;
    overflow: auto;
    ${Mixins.scroll}
`;
