import React, { useState, useReducer } from 'react';
import { AddressBook } from 'styled-icons/fa-regular/AddressBook';
import { Mixins, Button } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { DashboardPage } from '../../../components';
import { General } from './General';
import { Portfolio } from './Portfolio';

const testUser = {
    status: 'PENDING',
    email: 'jacky.chan@fake.utoronto.ca',
    firstname: 'Jacky',
    lastname: 'Chan',
    gender: 'MALE',
    school: 'UTSC',
    bio: 'actor/fighter',
    links: [
        {
            name: 'github',
            href: 'https://github.com/cheapreats/react-ui-library',
        },
        {
            name: 'linkedin',
            href: 'https://github.com/cheapreats/react-ui-library',
        },
        {
            name: 'website',
            href: 'https://github.com/cheapreats/react-ui-library',
        },
    ],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_links':
            const links = state.links.map(link =>
                link.name === action.name
                    ? { ...link, href: action.value }
                    : link,
            );
            return { ...state, links };
        default:
            return { ...state, [action.name]: action.value };
    }
}

export const Profile = () => {
    const [dirty, setDirty] = useState(false);
    const [user, _dispatch] = useReducer(reducer, {
        ...testUser,
    });

    const dispatch = data => {
        setDirty(true);
        _dispatch(data);
    };

    return (
        <DashboardPage heading="My Profile">
            <Form>
                <General user={user} dispatch={dispatch}/>
                <Portfolio user={user} dispatch={dispatch}/>
                <Button disabled={!dirty}>Save Changes</Button>
            </Form>
        </DashboardPage>
    );
};

Profile.routeProps = {
    path: '/:id',
    icon: AddressBook,
    exact: true,
};

const Form = styled.div`
    ${Mixins.flex('column')}
    max-width: 550px;
`;
