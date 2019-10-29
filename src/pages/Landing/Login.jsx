import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { LogIn } from 'styled-icons/boxicons-regular/LogIn';
import { Button, Heading, Input, SmallText } from '@cheapreats/react-ui';
import { LandingPage } from '../../components';

export const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = useCallback(
        ({ target }, setState) => setState(target.value),
        [],
    );
    const onLogin = useCallback(
        e => {
            e.preventDefault();
            const loginDetails = { email, password };
            console.log(loginDetails);
        },
        [email, password],
    );
    const goToRegisterPage = useCallback(
        e => {
            e.preventDefault();
            props.goToRegisterPage();
        },
        [props],
    );

    return (
        <LandingPage transition={props.transition}>
            <Heading>Hacker Dashboard</Heading>
            <SmallText bold={true} lineHeight={2.5}>
                Please login or sign up if you haven't already.
            </SmallText>
            <form onSubmit={onLogin}>
                <Input
                    name="email"
                    type="text"
                    label="Email"
                    value={email}
                    placeholder="Your hacker email"
                    autoComplete="email"
                    required
                    onChange={e => onChange(e, setEmail)}
                />
                <Input
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    placeholder="Your secret salt"
                    autoComplete="current-password"
                    required
                    onChange={e => onChange(e, setPassword)}
                />
                <ButtonContainer>
                    <StyledButton type="submit" icon={StyledLogIn} primary>
                        Login
                    </StyledButton>
                    <StyledButton onClick={goToRegisterPage}>
                        Sign up
                    </StyledButton>
                </ButtonContainer>
            </form>
        </LandingPage>
    );
};

const ButtonContainer = styled.div`
    margin-top: 10px;
    display: flex;
`;

const StyledButton = styled(Button)`
    margin-right: 10px;
`;

const StyledLogIn = styled(LogIn)`
    width: 25px;
    height: 25px;
`;
