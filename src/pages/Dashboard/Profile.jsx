import React, { useState } from 'react';
import styled from 'styled-components';
import { AddressCard } from 'styled-icons/fa-regular/AddressCard';
import { DashboardPage } from '../../components';
import {
    Button,
    Card,
    Checkbox,
    Heading,
    Input,
    Select,
} from '@cheapreats/react-ui';

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

export const Profile = () => {
    const [user, setUser] = useState({
        ...testUser,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const onChangeLinks = e => {
        const i = user.links.findIndex(l => l.name === e.target.name);
        const links = [...user.links];
        links[i] = { ...links[i], href: e.target.value };
        setUser({ ...user, links });
    };

    const onSubmitGeneralInformation = e => {
        e.preventDefault();
        const updatedUser = {
            firstname: user.firstname,
            lastname: user.lastname,
            gender: user.gender,
            school: user.school,
            bio: user.bio,
            photo: user.photo,
            links: user.links,
        };
        console.log(updatedUser);
    };
    const onSubmitEmail = e => {
        e.preventDefault();
        console.log(user.email);
    };
    const onSubmitPassword = e => {
        e.preventDefault();
        console.log(user.newPassword);
    };

    const completedProfile = profile => {
        if (!profile.email) return false;
        else if (!profile.firstname) return false;
        else if (!profile.lastname) return false;
        else if (!profile.school) return false;
        else if (!profile.bio) return false;
        else if (!profile.photo) return false;
        return true;
    };
    const checklist = [
        { label: 'Profile Completed', checked: completedProfile(user) },
        { label: 'Application Accepted', checked: user.status === 'ACCEPTED' },
    ];

    return (
        <DashboardPage heading="Profile">
            <Image src={user.photo} alt="profile" width={100} height={100} />
            <Layout>
                <Column>
                    <Heading>General Information</Heading>
                    <form onSubmit={onSubmitGeneralInformation}>
                        <Input
                            name="firstname"
                            type="text"
                            label="First Name"
                            value={user.firstname}
                            autoComplete="given-name"
                            onChange={onChange}
                        />
                        <Input
                            name="lastname"
                            type="text"
                            label="Last Name"
                            value={user.lastname}
                            autoComplete="family-name"
                            onChange={onChange}
                        />
                        <Select
                            name="gender"
                            label="Gender"
                            value={user.gender}
                            autoComplete="sex"
                            onChange={onChange}
                        >
                            <option value="UNDEFINED">
                                Prefer not to answer
                            </option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </Select>
                        <Input
                            name="school"
                            type="text"
                            label="School"
                            value={user.school}
                            onChange={onChange}
                        />
                        <Input
                            name="bio"
                            type="text"
                            label="Biography"
                            value={user.bio}
                            onChange={onChange}
                        />
                        {user.links.map(link => (
                            <Input
                                key={link.name}
                                name={link.name}
                                type="text"
                                label={link.name}
                                value={link.href}
                                onChange={onChangeLinks}
                            />
                        ))}
                        <SubmitButton />
                    </form>

                    <Heading>Change Email</Heading>
                    <form onSubmit={onSubmitEmail}>
                        <Input
                            name="email"
                            type="text"
                            label="Email"
                            value={user.email}
                            autoComplete="email"
                            onChange={onChange}
                        />
                        <SubmitButton />
                    </form>

                    <Heading>Change Password</Heading>
                    <form onSubmit={onSubmitPassword}>
                        <Input
                            name="currentPassword"
                            type="password"
                            label="Current Password"
                            value={user.currentPassword}
                            autoComplete="current-password"
                            onChange={onChange}
                            required
                        />
                        <Input
                            name="newPassword"
                            type="password"
                            label="New Password"
                            value={user.newPassword}
                            autoComplete="new-password"
                            onChange={onChange}
                            required
                        />
                        <Input
                            name="confirmPassword"
                            type="password"
                            label="Confirm New Password"
                            value={user.confirmPassword}
                            autoComplete="new-password"
                            onChange={onChange}
                            required
                        />
                        <SubmitButton />
                    </form>
                </Column>
                <Column>
                    <Heading>Checklist</Heading>
                    <Card>
                        {checklist.map(item => (
                            <ChecklistItem key={item.label}>
                                <Checkbox
                                    label={item.label}
                                    checked={item.checked}
                                    disabled
                                    readOnly
                                    style={{ cursor: 'default' }}
                                />
                            </ChecklistItem>
                        ))}
                    </Card>
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

const SubmitButton = () => (
    <ButtonContainer>
        <Button type="submit">Submit</Button>
    </ButtonContainer>
);

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
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ChecklistItem = styled.div`
    padding: 12px 0px;
`;
