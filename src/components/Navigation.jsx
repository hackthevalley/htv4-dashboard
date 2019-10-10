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
                    <MailLink
                        href="mailto:contact@hackthevalley.io"
                        className={NavLink}
                        target="_blank"
                    >
                        <Icon as={QuestionCircle} />
                        <Text>Need help?</Text>
                    </MailLink>
                </li>
                <li>
                    <LogoutLink>
                        <Icon as={LogOut} />
                        <Text>Logout</Text>
                    </LogoutLink>
                </li>
            </List>
        </Nav>
    );
};

const Nav = styled.nav`
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;

    ${({ theme }) => `
        background-color: ${theme.colors.primary};
        font-family: ${theme.font.family};
    `}

    ${Mixins.media(
        'tablet',
        `
        width: auto;
    `,
    )}
`;

const List = styled.ul`
    width: 100%;
    padding: 0;
    list-style-type: none;
`;

const Icon = styled.svg`
    width: 35px;
    height: 35px;
    margin: 0 16px 0 20px;
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

const MailLink = styled.a`
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

const LogoutLink = styled(L)`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 5px 0 5px 0;

    &:hover {
        background-color: rgba(0, 0, 0, 0.12);
    }

    ${Mixins.media(
        'tablet',
        `
        padding: 20px 0 20px 0;
    `,
    )}
`;
