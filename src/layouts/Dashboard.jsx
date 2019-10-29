import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from '../components';
import * as pages from '../pages/Dashboard';
const routes = Object.entries(pages);

export const Dashboard = () => {
    return (
        <Main>
            <Navigation pages={routes} />
            <Switch>
                {routes.map(([key, page]) => (
                    <Route {...page.routeProps} component={page} key={key} />
                ))}
            </Switch>
        </Main>
    );
};

const Main = styled.main`
    height: 100vh;
    display: flex;
`;

Dashboard.routeProps = {
    path: '/:id',
};
