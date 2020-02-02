import React, { useEffect, useState, useCallback, useReducer } from 'react';
import { AddressBook } from 'styled-icons/fa-regular/AddressBook';
import { Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { GET_USER_STATUS } from '../../../graphql/Profile';
import { Pending } from './Pending';
import { DashboardPage } from '../../../components';
import { query } from '../../../utils';

const reducer = (state, action) => {
    switch (action.type) {
        case 'set':
            return action.data;
        default:
            return { ...state, [action.name]: action.value };
    }
};

export const Profile = () => {
    const [user, dispatch] = useReducer(reducer, {});
    const [dirty, setDirty] = useState(false);

    const handler = useCallback(
        (name, value) => {
            console.log(user, value, name);
            if (user[name] === value) return;
            setDirty(true);
            dispatch({ name, value });
        },
        [user],
    );

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { getMe } = await query(GET_USER_STATUS);
                if (mounted) dispatch({ type: 'set', data: getMe });
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
                <Pending
                    user={user}
                    dispatch={handler}
                    dirty={dirty}
                    setDirty={setDirty}
                />
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
