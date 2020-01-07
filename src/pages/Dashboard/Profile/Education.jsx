import React from 'react';
import { Heading, Input, Card } from '@cheapreats/react-ui';

export const Education = ({ user, dispatch }) => {
    const onChange = ({ target }) => {
        dispatch({
            name: target.name,
            value:
                target.name === 'year_of_graduation'
                    ? Math.max(parseInt(target.value), 0)
                    : target.value,
        });
    };
    return (
        <Card padding="15px 25px" margin="0 0 30px" flat>
            <Heading size="1.5rem" margin="0 0 15px" type="h2" bold>
                Education
            </Heading>
            <Input
                name="school"
                label="School"
                placeholder="Name of your school"
                value={user.school}
                onChange={onChange}
            />
            <Input
                name="year_of_study"
                label="Year of Study"
                placeholder="1st, 2nd, highschool, eg."
                value={user.year_of_study}
                onChange={onChange}
            />
            <Input
                name="year_of_graduation"
                type="number"
                min="0"
                label="Year of Graduation"
                placeholder="Year of Graduation"
                value={user.year_of_graduation}
                onChange={onChange}
            />
        </Card>
    );
};
