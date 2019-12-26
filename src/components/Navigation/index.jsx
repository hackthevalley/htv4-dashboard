import React from 'react';
import { SignOutAlt } from 'styled-icons/fa-solid/SignOutAlt';
import { Mixins, Button } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { CollapseText } from './CollapseText';
import { logo } from '../../assets';

export const Navigation = ({
    children,
    ...props
}) => {
    return (
        <Container {...props}>
            <Header>
                <Logo alt='Hack the Valley Logo' src={logo}/>
                <CollapseText lineHeight='1.2' size='1.2rem' bold>
                    <span>Hack the Valley</span>
                    <span>Dashboard</span>
                </CollapseText>
            </Header>
            <Items>
                {children}
            </Items>
            <Footer icon={ SignOutAlt }>
                <CollapseText size='0.95rem' bold>
                    Logout
                </CollapseText>
            </Footer>
        </Container>
    );
};

const Container = styled.nav`
    ${Mixins.flex('column')}
    ${({ theme }) => `
        max-width: ${theme.dimensions.navigation.width}px;
        box-shadow: ${theme.depth[1]};
    `}
    box-sizing: border-box;
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
    ${({ theme }) => console.log(theme)}
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
        background-color: ${Mixins.darken(theme.colors.input.default, 0.06)};
        ${Mixins.clickable(
            Mixins.darken(theme.colors.input.default, 0.06),
            0.04
        )}
    `}
`;