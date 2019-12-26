import React from 'react';
import { Heading, Select, Input, Card } from '@cheapreats/react-ui';

export const General = ({ user, dispatch }) => {
    const onChange = ({ target }) => {
        console.log(target);
        dispatch({ name: target.name, value: target.value });
    };
    return (
        <Card padding='15px 25px' margin='0 0 30px' flat>
            <Heading size='1.5rem' margin='0 0 15px' type='h2' bold>General Information</Heading>
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
                limit='3'
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
        </Card>
    );
};