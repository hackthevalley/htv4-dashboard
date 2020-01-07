import React, { useEffect, useState, useCallback, useReducer } from 'react';
import { AddressBook } from 'styled-icons/fa-regular/AddressBook';
import { Mixins, Button } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { GET_USER, UPDATE_USER } from '../../../graphql/Profile';
import { DashboardPage } from '../../../components';
import { query } from '../../../utils';

import { Additional } from './Additional';
import { Experience } from './Experience';
import { Education } from './Education';
import { General } from './General';

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_links':
            const links = state.links.map(link =>
                link.name === action.name
                    ? { ...link, href: action.value }
                    : link,
            );
            return { ...state, links };
        case 'set':
            return action.data;
        default:
            return { ...state, [action.name]: action.value };
    }
};

export const Profile = () => {
    const [user, _dispatch] = useReducer(reducer, {});
    const [loading, setLoading] = useState(false);
    const [dirty, setDirty] = useState(false);

    const dispatch = useCallback(
        data => {
            setDirty(true);
            _dispatch(data);
        },
        [setDirty, _dispatch],
    );

    const submit = async () => {
        setLoading(true);
        try {
            const { _id, ..._user } = user;
            await query(UPDATE_USER, {
                user: _user,
            });
            setDirty(false);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { getMe } = await query(GET_USER);
                if (mounted)
                    _dispatch({
                        type: 'set',
                        data: getMe,
                    });
            } catch (err) {
                console.error(err);
            }
        })();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <DashboardPage heading="My Profile" loading={!user._id}>
            <Form>
                <General user={user} dispatch={dispatch} />
                <Education user={user} dispatch={dispatch} />
                <Experience user={user} dispatch={dispatch} />
                <Additional user={user} dispatch={dispatch} />
                <Button
                    onClick={submit}
                    disabled={!dirty}
                    loading={loading}
                    color="text"
                    primary
                >
                    Save Changes
                </Button>
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
