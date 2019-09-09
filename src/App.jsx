import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as layouts from './layouts';
const routes = Object.entries(layouts);

export const App = () => (
    <Switch>
        {routes.map(([key, component]) => (
            <Route {...component.routeProps} component={component} key={key} />
        ))}
    </Switch>
);
