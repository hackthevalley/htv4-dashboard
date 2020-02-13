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
    Paragraph,
} from '@cheapreats/react-ui';
import { labels } from '../../schedule';

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
                color={event.color}
                onClick={select}
                cells={cells}
                top={top}
                flat
            >
                <Content left>
                    <Heading bold size="0.85rem" lineHeight="1.2" type="h3">
                        {event.title}
                    </Heading>
                    <SmallText size="0.7rem" color="secondary" bold>
                        {from.format('k:mm')} - {to.format('k:mm')}
                    </SmallText>
                    <SmallText size="0.75rem" color="secondary" bold>
                        {event.location}
                    </SmallText>
                </Content>
                <Content>
                    <Organizer
                        color={event.color}
                        size="0.65rem"
                        margin="0 0 2px"
                        bold
                    >
                        {labels[event.color]}
                    </Organizer>
                    <Organizer size="0.65rem" margin="2px 0 0" bold>
                        {event.organizer}
                    </Organizer>
                </Content>
            </EventCard>
            <Modal state={modalState} width="400px">
                <Header sticky>
                    <Content left>
                        <Heading bold lineHeight="1.2" type="h3">
                            {event.title}
                        </Heading>
                        <SmallText color="secondary" bold>
                            {from.format('k:mm')} - {to.format('k:mm')}
                        </SmallText>
                        <SmallText color="secondary" bold>
                            {event.location}
                        </SmallText>
                    </Content>
                    <Content>
                        <Organizer color={event.color} margin="2px 0" bold>
                            {labels[event.color]}
                        </Organizer>
                        <Organizer margin="2px 0 0" bold>
                            {event.organizer}
                        </Organizer>
                    </Content>
                </Header>
                <CardBody>
                    {event.description && (
                        <Paragraph margin="10px 0 0" bold>
                            {event.description}
                        </Paragraph>
                    )}
                    <Button
                        onClick={() => modalState[1](false)}
                        margin="20px 0 0"
                        full
                    >
                        Close
                    </Button>
                </CardBody>
            </Modal>
        </>
    );
};

const EventCard = styled(Card)`
    ${Mixins.flex()}
    ${Mixins.clickable('#ffffff', 0.03)}
    ${Mixins.transition(['background-color'])}
    ${({ top, cells, indent, color, theme }) => `
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
        border-top: 4px solid ${color};
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
        padding-right: 10px;
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
    ${({ theme, color }) => `
        background-color: ${color || theme.colors.secondary};
    `}
`;

const CardBody = styled.div`
    padding: 0 20px 20px;
`;

const Header = styled.div`
    ${Mixins.flex()}
    ${({ sticky }) =>
        sticky
            ? `
        padding: 20px;
        position: sticky;
        background-color: white;
        top: 0;
    `
            : ''}
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
