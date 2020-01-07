import React, { useEffect, useState } from 'react';
import { Google } from 'styled-icons/fa-brands/Google';
import { Button, Heading, Paragraph, Card as C } from '@cheapreats/react-ui';
import styled from 'styled-components';
import { CHECK_USER } from '../../graphql/Dashboard';
import { LandingPage } from '../../components';
import { logo } from '../../assets';
import { query } from '../../utils';

export const Login = ({ history }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { getMe } = await query(CHECK_USER);
                if (getMe._id) {
                    history.replace(`/${getMe._id}`);
                    return;
                }
            } catch (err) {}
            if (mounted) setLoading(false);
        })();

        return () => {
            mounted = false;
        };
    }, [history]);
    return (
        <LandingPage loading={loading}>
            <Card>
                <Logo src={logo} />
                <Heading margin="0 0 30px" lineHeight="1" size="1.6rem" bold>
                    <Text>Hack the Valley 4</Text>
                    <Paragraph
                        color="secondary"
                        lineHeight="1"
                        type="span"
                        bold
                    >
                        Dashboard Login
                    </Paragraph>
                </Heading>
                <Button icon={Google} full>
                    Login with Google
                </Button>
            </Card>
        </LandingPage>
    );
};

Login.routeProps = {
    path: '/',
    exact: true,
};

const Card = styled(C)`
    width: 300px;
    text-align: center;
    padding-top: 20px;
`;

const Logo = styled.img`
    width: 120px;
    max-width: 60%;
`;

const Text = styled.span`
    display: block;
`;
