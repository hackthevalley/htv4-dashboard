import React from 'react';
import { SignOutAlt } from 'styled-icons/fa-solid/SignOutAlt';
import { Mixins, Button } from '@cheapreats/react-ui';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CollapseText } from './CollapseText';
import { logo } from '../../assets';

export const Navigation = withRouter(({ children, history, ...props }) => {
    const signOut = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <Container {...props}>
            <Header>
                <Logo alt="Hack the Valley Logo" src={logo} />
                <CollapseText lineHeight="1.2" size="1.2rem" bold>
                    <span>Hack the Valley</span>
                    <span>Dashboard</span>
                </CollapseText>
            </Header>
            <Items>{children}</Items>
            <Footer onClick={signOut} icon={SignOutAlt}>
                <CollapseText size="0.95rem" bold>
                    Logout
                </CollapseText>
            </Footer>
        </Container>
    );
});

const Container = styled.nav`
    ${Mixins.flex('column')}
    ${({ theme }) => `
        max-width: ${theme.dimensions.navigation.width}px;
    `}
    box-sizing: border-box;
    background-color: white;
    flex-shrink: 0;
`;

const Logo = styled.img`
    ${({ theme }) => `
        width: ${theme.dimensions.navigation.icon}px;
    `}
    flex-shrink: 0;
`;

const Header = styled.div`
    ${Mixins.flex('flex-start', 'center')}
    padding: 30px 15px;
`;

const Items = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0 15px;
`;

const Footer = styled(Button)`
    margin-top: auto;
    border: none;
    padding: 18px;
    & svg {
        margin-right: 0;
    }
    ${({ theme }) => `
        background-color: #e8e8e8;
        ${Mixins.clickable('#e8e8e8', 0.04)}
    `}
`;
