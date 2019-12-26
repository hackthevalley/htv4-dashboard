import React from 'react';
import { Mixins } from '@cheapreats/react-ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CollapseText } from './CollapseText';

export const NavigationItem = ({
    external,
    className,
    children,
    exact,
    icon,
    type,
    to,
}) => {
    return (
        <Item as={type} className={className}>
            <Link
                as={external ? undefined : NavLink}
                exact={exact}
                to={to}
            >
                {icon && <Icon as={icon}/>}
                <CollapseText size='0.95rem' color='inherit' bold>{children}</CollapseText>
            </Link>
        </Item>
    );
};

const Icon = styled.svg`
    ${Mixins.transition(['color'])}
    ${({ theme }) => `
        width: ${ theme.dimensions.navigation.icon }px;
    `}
    box-sizing: border-box;
    padding: 16px;
`;

const Item = styled.li`
    margin-bottom: 10px;
`;

const Link = styled.a`
    ${Mixins.transition(['background-color', 'color'])}
    ${Mixins.flex('flex-start', 'center')}
    ${Mixins.clickable('#ffffff', 0.02)}
    text-decoration: none;
    color: inherit;
    ${({ theme }) => `
        border-radius: ${ theme.dimensions.radius };
        color: ${ theme.colors.secondary };
        &.active, &:hover {
            background-color: ${Mixins.darken('#ffffff', 0.02)};
            color: ${ theme.colors.text };
            & ${Icon} {
                color: ${ theme.colors.primary };
            }
        }
    `}
`;