import React from 'react';
import { Heading, Textarea, Input, Card } from '@cheapreats/react-ui';

export const Portfolio = ({ user, dispatch }) => {
    const onChange = ({ target }) => {
        dispatch({ name: target.name, value: target.value });
    };

    const onChangeLinks = ({ target }) => {
        dispatch({
            type: 'update_links',
            name: target.name,
            value: target.value,
        });
    };

    return (
        <Card padding='15px 25px' margin='0 0 30px' flat>
            <Heading size='1.5rem' margin='0 0 15px' type='h2' bold>Additional Information</Heading>
            <Textarea
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
                    label={link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                    value={link.href}
                    onChange={onChangeLinks}
                />
            ))}
        </Card>
    );
};