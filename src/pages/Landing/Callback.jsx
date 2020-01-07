import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Loading as L } from '@cheapreats/react-ui';
import { LandingPage } from '../../components';

export const Callback = ({ history }) => {
    useEffect(() => {
        const { token, id } = window.location.search
            .slice(1)
            .split('&')
            .reduce((acc, curr) => {
                const [key, val] = curr.split('=');
                acc[key] = val;
                return acc;
            }, {});
        if (token && id) {
            localStorage.setItem('token', token);
            return history.replace(`/${id}`);
        }
        history.replace('/');
    }, [history]);

    return (
        <LandingPage>
            <Loading loading />
        </LandingPage>
    );
};

Callback.routeProps = {
    path: '/auth',
    exact: true,
};

const Loading = styled(L)`
    width: 100%;
    height: 100vh;
`;
