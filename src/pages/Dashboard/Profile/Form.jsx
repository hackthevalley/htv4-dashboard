import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, Heading, Input, Select } from '@cheapreats/react-ui';

export const Form = ({ user, dispatch }) => {
    const onChange = useCallback(
        ({ target }) => dispatch({ name: target.name, value: target.value }),
        [dispatch],
    );
    const onChangeLinks = useCallback(
        ({ target }) =>
            dispatch({
                type: 'update_links',
                name: target.name,
                value: target.value,
            }),
        [dispatch],
    );
    const onSubmitGeneralInformationChange = useCallback(
        e => {
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
        },
        [user],
    );
    const onSubmitEmailChange = useCallback(
        e => {
            e.preventDefault();
            console.log(user.email);
        },
        [user],
    );
    const onSubmitPasswordChange = useCallback(
        e => {
            e.preventDefault();
            console.log(user.newPassword);
        },
        [user],
    );

    return (
        <div>
            <Heading>General Information</Heading>
            <form onSubmit={onSubmitGeneralInformationChange}>
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
                    <option value="UNDEFINED">Prefer not to answer</option>
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
                <ButtonContainer>
                    <Button type="submit">Submit</Button>
                </ButtonContainer>
            </form>

            <Heading>Change Email</Heading>
            <form onSubmit={onSubmitEmailChange}>
                <Input
                    name="email"
                    type="text"
                    label="Email"
                    value={user.email}
                    autoComplete="email"
                    onChange={onChange}
                />
                <ButtonContainer>
                    <Button type="submit">Submit</Button>
                </ButtonContainer>
            </form>

            <Heading>Change Password</Heading>
            <form onSubmit={onSubmitPasswordChange}>
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
                <ButtonContainer>
                    <Button type="submit">Submit</Button>
                </ButtonContainer>
            </form>
        </div>
    );
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
