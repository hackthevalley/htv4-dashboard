import React, { useReducer } from 'react';
import styled from 'styled-components';
import { AddressCard } from 'styled-icons/fa-regular/AddressCard';
import { DashboardPage } from '../../../components';
import { Checklist } from './Checklist';
import { Form } from './Form';

const testUser = {
    status: 'PENDING',
    email: 'jacky.chan@fake.utoronto.ca',
    firstname: 'Jacky',
    lastname: 'Chan',
    gender: 'MALE',
    school: 'UTSC',
    bio: 'actor/fighter',
    photo: 'https://i.ibb.co/HF6q3BF/doggo.gif',
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

function reducer(state, action) {
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
    const [user, dispatch] = useReducer(reducer, {
        ...testUser,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    return (
        <DashboardPage heading="Profile">
            <Image src={user.photo} alt="profile" />
            <Layout>
                <Column>
                    <Form user={user} dispatch={dispatch} />
                </Column>
                <Column>
                    <Checklist user={user} />
                </Column>
            </Layout>
        </DashboardPage>
    );
};

Profile.routeProps = {
    path: '/:id',
    Icon: AddressCard,
    exact: true,
};

const Layout = styled.div`
    display: flex;
`;

const Column = styled.div`
    flex-grow: 1;
    padding: 12px 20px;
`;

const Image = styled.img`
    margin: 0px 20px;
    border: 3px solid white;
    width: 100px;
    height: 100px;
`;
