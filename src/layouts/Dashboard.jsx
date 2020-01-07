import React, { useState, useEffect } from 'react';
import { Loading } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Navigation, NavigationItem } from '../components';
import { CHECK_USER } from '../graphql/Dashboard';
import * as pages from '../pages/Dashboard';
import { query } from '../utils';
const routes = Object.entries(pages);

export const Dashboard = ({ history, match }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { getMe } = await query(CHECK_USER);
                if (getMe._id !== match.params.id) {
                    throw new Error();
                }
                if (mounted) setLoading(false);
            } catch (err) {
                localStorage.clear();
                history.push('/');
            }
        })();

        return () => {
            mounted = false;
        };
    }, [history, match.params.id]);
    return (
        <Main loading={loading}>
            <Navigation>
                {routes.map(([key, page]) => (
                    <NavigationItem
                        {...page.routeProps}
                        to={page.routeProps.path.replace(
                            ':id',
                            match.params.id,
                        )}
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
};

const Main = styled(Loading)`
    height: 100vh;
    display: flex;
    flex-shrink: 0;
`;

Dashboard.routeProps = {
    path: '/:id',
};
