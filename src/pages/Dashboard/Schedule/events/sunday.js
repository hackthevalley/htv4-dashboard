import { HTV_OFFICIAL, WORKSHOPS } from './colours';

export default [
    {
        title: 'System Administration Workshop',
        location: 'HW214',
        description: 'System Administration Workshop',
        organizer: ['Omar Chehab'],
        time: ['01:00', '2:00'], // from - to
        ...WORKSHOPS,
    },
    {
        title: 'Breakfast',
        location: 'HW308',
        description: 'Breakfast!',
        organizer: ['Jun Zheng'],
        time: ['09:00', '11:00'], // from - to
        ...HTV_OFFICIAL,
    },
    {
        title: 'Project Submission',
        location: 'Devpost',
        description: 'Project Submission',
        organizer: ['Jun Zheng'],
        time: ['10:00', '11:00'], // from - to
        ...HTV_OFFICIAL,
    },
    {
        title: 'Lunch',
        location: 'HW308',
        description: 'Lunch!',
        organizer: ['Jun Zheng'],
        time: ['12:00', '14:00'], // from - to
        ...HTV_OFFICIAL,
    },
    {
        title: 'Round 1 Judging',
        location: 'Meeting Place',
        description: 'Round 1 Judging',
        organizer: ['Jun Zheng'],
        time: ['12:00', '13:00'], // from - to
        ...HTV_OFFICIAL,
    },
    {
        title: 'Round 2 Judging',
        location: 'Meeting Place',
        description: 'Round 2 Judging',
        organizer: ['Jun Zheng'],
        time: ['13:30', '14:30'], // from - to
        ...HTV_OFFICIAL,
    },
    {
        title: 'Closing Ceremony',
        location: 'AC223',
        description: 'Closing Ceremony',
        organizer: ['Jun Zheng'],
        time: ['15:00', '17:00'], // from - to
        ...HTV_OFFICIAL,
    },
];
