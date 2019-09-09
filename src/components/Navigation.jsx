import React from 'react';

export const Navigation = ({ pages }) => {
    return (
        <nav>
            <ul>
                {pages.map(([key, { routeProps }]) => (
                    <li key={key}>
                        <routeProps.Icon width="15" />
                        {key}
                        {routeProps.path}
                    </li>
                ))}
                <li>Logout</li>
            </ul>
        </nav>
    );
};
