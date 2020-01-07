import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as pages from './pages/Landing';
import * as layouts from './layouts';

export const App = () => (
    <Switch>
        {Object.entries(pages).map(([key, component]) => (
            <Route {...component.routeProps} component={component} key={key} />
        ))}
        {Object.entries(layouts).map(([key, component]) => (
            <Route {...component.routeProps} component={component} key={key} />
        ))}
    </Switch>
);
