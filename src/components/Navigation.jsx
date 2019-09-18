import React from 'react';
import styled from 'styled-components';
import { NavLink as L } from 'react-router-dom';
import { LogOut } from 'styled-icons/boxicons-regular/LogOut';

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
                <BottomItem>
                    <NavLink>
                        <Icon as={LogOut} />
                        <Text>Logout</Text>
                    </NavLink>
                </BottomItem>
            </List>
        </Nav>
    );
};

const Nav = styled.nav`
    height: 100%;
    background: royalblue;
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.8);

    @media (max-width: 768px) {
        width: auto;
    }
`;

const List = styled.ul`
    width: 100%;
    padding: 0;
    list-style-type: none;
`;

const Icon = styled.svg`
    width: 30px;
    height: 50px;
    margin: 0 20px 0 20px;
`;

const Text = styled.p`
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled(L)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    margin: 0 10px 0 10px;
    border-radius: 10px;

    &.active {
        color: rgba(255, 255, 255, 0.9);
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        padding: 10px 0 10px 0;
    }
`;

const BottomItem = styled.li`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0 10px 0;
    background-color: rgba(0, 0, 0, 0.1);
`;
