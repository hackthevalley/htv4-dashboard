import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from '../components';
import * as pages from '../pages/Dashboard';
const routes = Object.entries(pages);

export const Dashboard = () => {
    return (
        <main style={{ height: '100%' }}>
            <Navigation pages={routes} />
            <Switch>
                {routes.map(([key, page]) => (
                    <Route {...page.routeProps} component={page} key={key} />
                ))}
            </Switch>
        </main>
    );
};

Dashboard.routeProps = {
    path: '/:id',
};
