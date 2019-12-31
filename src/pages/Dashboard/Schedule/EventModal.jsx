import React from 'react';
import styled from 'styled-components';
import { Heading, Modal, Paragraph, SmallText } from '@cheapreats/react-ui';
import { LabelLayout } from '@cheapreats/react-ui/dist/__Layouts';

export const EventModal = ({ state, event }) => {
    return (
        event && (
            <StyledModal
                state={state}
                background={event.background}
                primary={event.primary}
                secondary={event.secondary}
            >
                <HeadingContainer>
                    <Heading bold type="h5" color={event.primary}>
                        {event.title}
                    </Heading>
                    <SmallText color={event.primary}>
                        {event.startTime.format('h:mma')} -{' '}
                        {event.endTime.format('h:mma')}
                    </SmallText>
                </HeadingContainer>
                <LabelLayout label="Location">
                    <StyledText color={event.primary}>
                        {event.location}
                    </StyledText>
                </LabelLayout>
                <LabelLayout label="Organizer">
                    <StyledText color={event.primary}>
                        {event.organizer}
                    </StyledText>
                </LabelLayout>
                <LabelLayout label="Description">
                    <StyledText color={event.primary}>
                        {event.description}
                    </StyledText>
                </LabelLayout>
            </StyledModal>
        )
    );
};

const StyledModal = styled(Modal)`
    padding: 10px;
    ${({ background, primary, secondary }) => `
        background-color: ${background};
        color: ${primary};
        border: 2px solid ${primary}
    `}
`;

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const StyledText = styled(Paragraph)`
    opacity: 0.9;
`;
