import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Hooks } from '@cheapreats/react-ui';
import { Login, Register } from '../pages/Landing';
import { SideImage } from '../pages/Landing/SideImage';
// import * as pages from '../pages/Landing';
// const routes = Object.entries(pages);

export const Landing = () => {
    const [show, setShow] = useState(true);
    const [init, mount, transition] = Hooks.useTransition(show, {
        start: 250,
        end: 250,
    });
    const [, m, animateLogin] = Hooks.useTransition(transition, { end: 300 });
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show, setShow]);

    return (
        <StyledMain>
            {/* <Switch>
                {routes.map(([key, page]) => (
                    <Route
                        {...page.routeProps}
                        component={page}
                        key={key}
                    />
                ))}
            </Switch> */}
            {init && (
                <Login
                    transition={animateLogin}
                    goToRegisterPage={toggleShow}
                />
            )}
            {!init && (
                <Register
                    transition={!mount && !m}
                    goToLoginPage={toggleShow}
                />
            )}
            <SideImage />
        </StyledMain>
    );
};

Landing.routeProps = {
    path: '/',
    exact: true,
};

const StyledMain = styled.main`
    display: flex;
    min-height: 100vh;
`;
