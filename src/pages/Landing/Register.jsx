import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { LogIn } from 'styled-icons/boxicons-regular/LogIn';
import { Button, Heading, Input, SmallText } from '@cheapreats/react-ui';
import { LandingPage } from '../../components';

export const Register = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordConfirmed, setPasswordConfirmed] = useState(true);

    const onChange = useCallback(
        ({ target }, setState) => setState(target.value),
        [],
    );
    const onRegister = useCallback(
        e => {
            e.preventDefault();
            const signUpDetails = { email, password };
            if (password === confirmPassword) console.log(signUpDetails);
            else console.log('incorrect password');
        },
        [email, password, confirmPassword],
    );
    const goToLoginPage = useCallback(
        e => {
            e.preventDefault();
            props.goToLoginPage();
        },
        [props],
    );
    const matchPassword = useCallback(() => {
        setPasswordConfirmed(!confirmPassword || password === confirmPassword);
    }, [password, confirmPassword, setPasswordConfirmed]);
    const passwordConfirmedErrorText = useMemo(
        () =>
            passwordConfirmed ? '' : 'The passwords you entered do not match.',
        [passwordConfirmed],
    );

    return (
        <LandingPage transition={props.transition}>
            <Heading>Hacker Dashboard</Heading>
            <SmallText bold lineHeight={2.5}>
                Please enter your sign up details.
            </SmallText>
            <form onSubmit={onRegister}>
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
                    autoComplete="new-password"
                    required
                    onChange={e => onChange(e, setPassword)}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    placeholder="Confirm your secret salt"
                    autoComplete="new-password"
                    required
                    onChange={e => onChange(e, setConfirmPassword)}
                    onBlur={matchPassword}
                    error={passwordConfirmedErrorText}
                />
                <ButtonContainer>
                    <StyledButton onClick={goToLoginPage}>
                        Back to Login
                    </StyledButton>
                    <StyledButton type="submit" icon={StyledLogIn} primary>
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
