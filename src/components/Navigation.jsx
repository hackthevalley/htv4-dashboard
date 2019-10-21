import React from 'react';
import styled from 'styled-components';
import { NavLink as L } from 'react-router-dom';
import { LogOut } from 'styled-icons/boxicons-regular/LogOut';
import { QuestionCircle } from 'styled-icons/fa-regular/QuestionCircle';
import { Mixins } from '@cheapreats/react-ui';

export const Navigation = ({ pages }) => {
    return (
        <Nav>
            <List>
                <li>
                    <Header>
                        <Logo src={require('../assets/logo_white.png')} />
                        <Text>Hack the Valley</Text>
                    </Header>
                </li>
                {pages.map(([key, { routeProps }]) => (
                    <li key={key}>
                        <NavLink
                            to={routeProps.path}
                            isActive={(match, location) =>
                                location.pathname == routeProps.path
                            }
                        >
                            <Icon as={routeProps.Icon} />
                            <Text>{key}</Text>
                        </NavLink>
                    </li>
                ))}
                <li>
                    <NavLink
                        as="a"
                        href="mailto:contact@hackthevalley.io"
                        classN
                        ame={NavLink}
                        target="_blank"
                    >
                        <Icon as={QuestionCircle} />
                        <Text>Need help?</Text>
                    </NavLink>
                </li>
                <LogoutItem>
                    <LogoutLink>
                        <Icon as={LogOut} />
                        <Text>Logout</Text>
                    </LogoutLink>
                </LogoutItem>
            </List>
        </Nav>
    );
};

const Nav = styled.nav`
    height: 100%;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;

    ${({ theme }) => `
        background-color: ${theme.colors.primary};
        font-family: ${theme.font.family};
        width: ${theme.dimensions.navigation.width}px;
    `}

    ${Mixins.media(
        'tablet',
        `
        width: auto;
    `,
    )}
`;

const List = styled.ul`
    ${Mixins.flex('column')}
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

const Icon = styled.svg`
    width: 35px;
    height: 35px;
    margin: 0 15px 0 15px;
`;

const Text = styled.p`
    ${Mixins.media(
        'tablet',
        `
        display: none;
    `,
    )}
`;

const NavLink = styled(L)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    margin: 0 10px 0 10px;
    border-radius: 10px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &.active {
        background-color: rgba(255, 255, 255, 0.2);
    }

    ${Mixins.media(
        'tablet',
        `
        padding: 15px 0 15px 0;
    `,
    )}
`;

const LogoutItem = styled.li`
    margin-top: auto;
`;

const LogoutLink = styled(NavLink)`
    margin: 0;
    padding: 5px 0 5px 5px;
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: rgba(0, 0, 0, 0.12);
    }

    ${Mixins.media(
        'tablet',
        `
        padding: 15px 0 15px 5px;
    `,
    )}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    ${Mixins.media(
        'tablet',
        `
        padding-left: 18px;
    `,
    )}
`;

const Logo = styled.img`
    width: 50px;
    margin: 15px 9px 15px 0;
`;
