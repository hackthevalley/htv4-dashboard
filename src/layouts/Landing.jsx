import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as pages from '../pages/Landing';
const routes = Object.entries(pages);

export const Landing = () => {
    return (
        <main>
            <section>
                <Switch>
                    {routes.map(([key, page]) => (
                        <Route
                            {...page.routeProps}
                            component={page}
                            key={key}
                        />
                    ))}
                </Switch>
            </section>
            {/* Image here (Focus on pusheen) */}
        </main>
    );
};

Landing.routeProps = {
    path: '/',
    exact: true,
};
