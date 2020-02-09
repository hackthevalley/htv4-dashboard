import React, { useState, useCallback } from 'react';
import { UPDATE_USER } from '../../../graphql/Profile';
import { Card, Button, Heading, Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { query } from '../../../utils';

export const Pending = ({ user, dispatch, dirty, setDirty }) => {
    const [loading, setLoading] = useState();

    const submit = useCallback(async () => {
        setLoading(true);
        try {
            const { status } = user;
            await query(UPDATE_USER, {
                user: {
                    status,
                },
            });
            setDirty(false);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    }, [user, setDirty]);

    return (
        <>
            <Card margin="0 0 20px" padding="20px" flat>
                <Heading type="h2" bold size="1.4rem">
                    Thank you for applying to Hack the Valley {user.firstname}{' '}
                    {user.lastname}. Please let us know your avaliablity.
                </Heading>
                <Buttons>
                    <Button
                        onClick={() => dispatch('status', 'ACCEPTED')}
                        primary={user.status === 'ACCEPTED'}
                        margin="10px"
                        color="text"
                        full
                    >
                        Available
                    </Button>
                    <Button
                        onClick={() => dispatch('status', 'DECLINED')}
                        primary={user.status === 'DECLINED'}
                        margin="10px"
                        color="text"
                        full
                    >
                        Unavailable
                    </Button>
                </Buttons>
            </Card>
            <Button
                onClick={submit}
                loading={loading}
                disabled={!dirty}
                color="text"
                primary
            >
                Save Changes
            </Button>
        </>
    );
};

const Buttons = styled.div`
    ${Mixins.flex()}
    width: 100%;
    margin: 10px -10px 0;
`;
