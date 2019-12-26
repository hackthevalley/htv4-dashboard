import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Navigation, NavigationItem } from '../components';
import * as pages from '../pages/Dashboard';
const routes = Object.entries(pages);

export const Dashboard = ({ match }) => (
    <Main>
        <Navigation>
            {routes.map(([key, page]) => (
                <NavigationItem
                    {...page.routeProps}
                    to={page.routeProps.path.replace(':id', match.params.id)}
                    key={key}
                >
                    {key}
                </NavigationItem>
            ))}
        </Navigation>
        <Switch>
            {routes.map(([key, page]) => (
                <Route {...page.routeProps} component={page} key={key} />
            ))}
        </Switch>
    </Main>
);

const Main = styled.main`
    height: 100vh;
    display: flex;
`;

Dashboard.routeProps = {
    path: '/:id',
};
