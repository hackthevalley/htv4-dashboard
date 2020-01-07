import React from 'react';
import styled from 'styled-components';
import { Heading, Loading, Mixins } from '@cheapreats/react-ui';

export const DashboardPage = ({ children, heading = '', ...props }) => {
    return (
        <Container {...props}>
            <Heading margin="0 0 20px" bold>
                {heading}
            </Heading>
            {children}
        </Container>
    );
};

const Container = styled(Loading)`
    ${Mixins.scroll}
    flex-grow: 1;
    padding: 20px 40px 40px;
    position: relative;
    overflow: auto;
`;
