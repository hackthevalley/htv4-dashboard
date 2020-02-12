import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
    Card,
    Button,
    Modal,
    Mixins,
    Heading,
    SmallText,
} from '@cheapreats/react-ui';

const getDuration = (from, to) => {
    let diff = to.diff(from, 'm');
    if (diff < 0) {
        diff += 1440;
    }
    return diff / 30;
};

const getTop = from => {
    const hours = from.hours();
    if (hours >= 8) return hours - 8;
    return hours + 16;
};

export const Event = ({ event }) => {
    const from = moment(event.time[0], 'HH:mm');
    const to = moment(event.time[1], 'HH:mm');
    const cells = getDuration(from, to);
    const modalState = useState();
    const top = getTop(from) * 2;

    const select = () => {
        modalState[1](true);
    };

    return (
        <>
            <EventCard
                indent={event.indent}
                onClick={select}
                cells={cells}
                padding="15px"
                top={top}
                flat
            >
                <Content left>
                    <Heading bold size="0.85rem" lineHeight="1.2" type="h3">
                        {event.title}
                    </Heading>
                    <SmallText size="0.75rem" color="secondary" bold>
                        {event.location}
                    </SmallText>
                </Content>
                <Content>
                    <Organizer size="0.65rem" margin="0 0 2px" bold>
                        {event.organizer}
                    </Organizer>
                    <SmallText size="0.7rem" color="secondary" bold>
                        {from.format('k:mm')} - {to.format('k:mm')}
                    </SmallText>
                </Content>
            </EventCard>
            <Modal state={modalState} padding="20px" width="400px">
                <Header>
                    <Content left>
                        <Heading bold lineHeight="1.2" type="h3">
                            {event.title}
                        </Heading>
                        <SmallText color="secondary" bold>
                            {event.location}
                        </SmallText>
                    </Content>
                    <Content>
                        <Organizer margin="2px 0" bold>
                            {event.organizer}
                        </Organizer>
                        <SmallText color="secondary" bold>
                            {from.format('k:mm')} - {to.format('k:mm')}
                        </SmallText>
                    </Content>
                </Header>
                <Button
                    onClick={() => modalState[1](false)}
                    margin="20px 0 0"
                    full
                >
                    Close
                </Button>
            </Modal>
        </>
    );
};

const EventCard = styled(Card)`
    ${Mixins.flex()}
    ${Mixins.clickable('#ffffff', 0.03)}
    ${Mixins.transition(['background-color'])}
    ${({ top, cells, indent, theme }) => `
        ${Mixins.position(
            'absolute',
            `0 2px 0 ${indent * 50}px`,
            `${(theme.dimensions.calendar.height + 1.5) * top}px`,
            0,
            'auto',
        )}
        max-height: ${(theme.dimensions.calendar.height + 1.5) * cells}px;
        min-height: ${(theme.dimensions.calendar.height + 1.5) * cells}px;
        height: ${(theme.dimensions.calendar.height + 1.5) * cells}px;
        border-top: 4px solid ${theme.colors.primary};
    `}
    box-sizing: border-box;
    border-bottom: 1.5px solid rgba(0,0,0,0.05);
    border-left: 1.5px solid rgba(0,0,0,0.05);
`;

const Content = styled.div`
    ${({ left }) =>
        left
            ? `
        margin-right: auto;
        ${Mixins.flex('column')}
    `
            : `
        flex-shrink: 0;
        ${Mixins.flex('column', 'flex-start', 'flex-end')}
    `}
`;

const Organizer = styled(SmallText)`
    padding: 6px;
    border-radius: 4px;
    line-height: 1;
    color: white;
    ${({ theme }) => `
        background-color: ${theme.colors.secondary};
    `}
`;

const Header = styled.div`
    ${Mixins.flex()}
    ${Mixins.media(
        'phone',
        `
        flex-direction: column;
        & ${Content} {
            align-items: flex-start;
            margin-bottom: 10px;
        }
    `,
    )}
`;
