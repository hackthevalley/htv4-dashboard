import React from 'react';
import { Heading, Select, Datepicker, Input, Card } from '@cheapreats/react-ui';

export const General = ({ user, dispatch }) => {
    const onChange = ({ target }) => {
        dispatch({ name: target.name, value: target.value });
    };

    return (
        <Card padding="15px 25px" margin="0 0 30px" flat>
            <Heading size="1.5rem" margin="0 0 15px" type="h2" bold>
                General Information
            </Heading>
            <Input
                name="firstname"
                placeholder="Your First Name"
                label="First Name"
                value={user.firstname}
                autoComplete="given-name"
                onChange={onChange}
            />
            <Input
                name="lastname"
                placeholder="Your Last Name"
                label="Last Name"
                value={user.lastname}
                autoComplete="family-name"
                onChange={onChange}
            />
            <Datepicker
                name="birthday"
                label="Birthday"
                value={new Date(user.birthday)}
                onChange={onChange}
            />
            <Input
                name="phone"
                placeholder="Phone Number"
                label="Phone Number"
                value={user.phone}
                autoComplete="tel"
                onChange={onChange}
            />
            <Select
                name="gender"
                label="Gender"
                placeholder="Select a gender"
                value={user.gender}
                onChange={onChange}
            >
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
                <option value="OTHER">Prefer not to answer</option>
            </Select>
            <Select
                name="ethnicity"
                label="Ethnicity"
                placeholder="Select a ethnicity"
                value={user.ethnicity}
                onChange={onChange}
            >
                <option value="WHITE">White</option>
                <option value="BLACK">Black</option>
                <option value="ASIAN">Asian</option>
                <option value="MIXED">Mixed</option>
                <option value="HISPANIC">Hispanic</option>
                <option value="INDIGENOUS">Indigienous</option>
                <option value="OTHER">Prefer not to answer</option>
            </Select>
        </Card>
    );
};
