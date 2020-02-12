import React from 'react';
import { Card as C, Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { LandingPage, Schedule } from '../../components';
import { schedule } from '../../schedule';

export const Live = () => {
    return (
        <LandingPage>
            <Card>
                <Schedule schedule={schedule} />
            </Card>
        </LandingPage>
    );
};

Live.routeProps = {
    path: '/live',
    exact: true,
};

const Card = styled(C)`
    ${Mixins.flex()}
    position: relative;
    padding: 0;
    height: 100%;
    max-width: 100%;
`;
