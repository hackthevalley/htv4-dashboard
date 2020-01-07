import React from 'react';
import { Heading, Textarea, Select, Card } from '@cheapreats/react-ui';

export const Additional = ({ user, dispatch }) => {
    const onChange = ({ target }) => {
        dispatch({ name: target.name, value: target.value });
    };

    return (
        <Card padding="15px 25px" margin="0 0 30px" flat>
            <Heading size="1.5rem" margin="0 0 15px" type="h2" bold>
                Additional Information
            </Heading>
            <Select
                name="size"
                label="Shirt Size"
                placeholder="Select a shirt size"
                value={user.size}
                onChange={onChange}
            >
                <option value="XS">Extra Small</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
                <option value="XXL">Extra Extra Large</option>
            </Select>
            <Textarea
                name="bio"
                placeholder="Tell us about yourself!"
                label="Biography"
                value={user.bio}
                onChange={onChange}
            />
            <Textarea
                name="food_restrictions"
                placeholder="Due to alergies, religion, etc."
                label="Food Restrictions"
                value={user.food_restrictions}
                onChange={onChange}
            />
        </Card>
    );
};
