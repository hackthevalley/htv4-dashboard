import React from 'react';
import { Heading, Input, Card } from '@cheapreats/react-ui';

export const Experience = ({ user, dispatch }) => {
    const onChange = ({ target }) => {
        dispatch({ name: target.name, value: target.value });
    };

    const onLinkChange = ({ target }) => {
        dispatch({
            name: 'links',
            value: {
                ...user.links,
                [target.name]: target.value,
            },
        });
    };

    return (
        <Card padding="15px 25px" margin="0 0 30px" flat>
            <Heading size="1.5rem" margin="0 0 15px" type="h2" bold>
                Experiences
            </Heading>
            <Input
                name="resume"
                label="Link to Resume"
                placeholder="Resume"
                value={user.resume}
                onChange={onChange}
            />
            <Input
                name="github"
                label="Github"
                placeholder="Link to Github"
                value={user.links.github}
                onChange={onLinkChange}
            />
            <Input
                name="linkedin"
                label="Linkedin"
                placeholder="Link to Linkedin"
                value={user.links.linkedin}
                onChange={onLinkChange}
            />
            <Input
                name="devpost"
                label="Devpost"
                placeholder="Link to Devpost"
                value={user.links.devpost}
                onChange={onLinkChange}
            />
            <Input
                name="other"
                label="Other"
                placeholder="Link to other"
                value={user.links.other}
                onChange={onLinkChange}
            />
        </Card>
    );
};
