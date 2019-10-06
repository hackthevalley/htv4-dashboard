import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Card, Checkbox, Heading } from '@cheapreats/react-ui';

export const Checklist = ({ user }) => {
    const checklist = useMemo(() => {
        const completedProfile = profile => {
            if (!profile.email) return false;
            else if (!profile.firstname) return false;
            else if (!profile.lastname) return false;
            else if (!profile.school) return false;
            else if (!profile.bio) return false;
            else if (!profile.photo) return false;
            return true;
        };

        return [
            { label: 'Profile Completed', checked: completedProfile(user) },
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
        </div>
    );
};

const ChecklistItem = styled.div`
    padding: 12px 0px;
`;
