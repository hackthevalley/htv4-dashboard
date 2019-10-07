import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card, Checkbox, Heading } from '@cheapreats/react-ui';

export const Checklist = ({ user }) => {
    const checklist = useMemo(() => {
        let completedProfile = true;
        if (!user.email) completedProfile = false;
        else if (!user.firstname) completedProfile = false;
        else if (!user.lastname) completedProfile = false;
        else if (!user.school) completedProfile = false;
        else if (!user.bio) completedProfile = false;
        else if (!user.photo) completedProfile = false;

        return [
            { label: 'Profile Completed', checked: completedProfile },
            {
                label: 'Application Accepted',
                checked: user.status === 'ACCEPTED',
            },
        ];
    }, [user]);

    return (
        <div>
            <Heading>Checklist</Heading>
            <Card>
                {checklist.map(item => (
                    <ChecklistItem key={item.label}>
                        <StyledCheckbox
                            label={item.label}
                            checked={item.checked}
                            disabled
                            readOnly
                        />
                    </ChecklistItem>
                ))}
            </Card>
        </div>
    );
};

const ChecklistItem = styled.div`
    padding: 12px 0px;
`;

const StyledCheckbox = styled(Checkbox)`
    & input {
        cursor: default;
    }
`;
