import React from 'react';
import styled from 'styled-components';
import { Heading, Loading, Mixins } from '@cheapreats/react-ui';

export const DashboardPage = ({ children, heading = '', ...props }) => {
    return (
        <StyledSection {...props}>
            <Heading margin="0 0 20px" bold>
                {heading}
            </Heading>
            {children}
        </StyledSection>
    );
};

const StyledSection = styled(Loading)`
    ${Mixins.scroll}
    ${({ theme }) => `
        background-color: ${theme.colors.input.default};
    `}
    flex-grow: 1;
    padding: 20px 40px 40px;
    position: relative;
    overflow: auto;
`;
