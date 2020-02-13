const colors = {
    FOOD: '#0099ff',
    SUMMIT: '#f8b92a',
    WORKSHOP: '#e600f5',
    MLH: '#e73427',
    HTV: '#1ccf00',
};

export const labels = {
    [colors.FOOD]: 'Food',
    [colors.SUMMIT]: 'Summit',
    [colors.WORKSHOP]: 'Workshop',
    [colors.MLH]: 'MLH Event',
    [colors.HTV]: 'HTV Event',
};

/*
    title: String!,
    location: String!,
    organizer: String!,
    color: String!,
    time: [String!, String!], // [ from, to ]
    description?: String,
*/

export const schedule = [
    {
        date: new Date(2020, 1, 14),
        events: [
            {
                title: 'Registration',
                location: 'IC Front Foyer',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['18:00', '20:00'],
            },
            {
                title: 'Dinner',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['18:00', '20:00'],
            },
            {
                title: 'Team Building Workshop',
                location: 'IC 110',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['19:00', '20:00'],
            },
            {
                title: 'Opening Ceremony',
                location: 'IC 130',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['20:00', '22:00'],
            },
            {
                title: 'Midnight Snack',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['22:00', '0:00'],
            },
            {
                title: 'Team Building Workshop #2',
                location: 'IC 110',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['22:00', '23:00'],
            },
            {
                title: 'Facebook Workshop',
                location: 'IC 130',
                organizer: 'Facebook',
                color: colors.WORKSHOP,
                time: ['23:00', '1:00'],
            },
            {
                title: 'Intro to APIs with GCP',
                location: 'IC 220',
                organizer: 'Kaveen',
                color: colors.WORKSHOP,
                time: ['1:00', '2:00'],
            },
            {
                title: 'CheaprEats Workshop',
                location: 'IC 320',
                organizer: 'Jun Zheng',
                color: colors.WORKSHOP,
                time: ['1:00', '2:00'],
            },
        ],
    },
    {
        date: new Date(2020, 1, 15),
        events: [
            {
                title: 'Early Bird Breakfast',
                location: 'Outside IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['8:00', '10:00'],
            },
            {
                title: 'How to Find and Validate a Valuable Idea',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['8:00', '9:00'],
            },
            {
                title: '1517 Office Hours',
                location: 'IC Atrium',
                organizer: '1517 Fund',
                color: colors.WORKSHOP,
                time: ['9:00', '11:30'],
            },
            {
                title: 'Intro to React',
                location: 'IC 220',
                organizer: 'Frederic Pun',
                color: colors.WORKSHOP,
                time: ['9:00', '10:00'],
            },
            {
                title: 'Data Sketching Workshop',
                location: 'IC 220',
                organizer: 'William Yun',
                color: colors.WORKSHOP,
                time: ['10:00', '11:00'],
            },
            {
                title: 'Fuse Workshop',
                location: 'IC 320',
                organizer: 'FUSE',
                color: colors.WORKSHOP,
                time: ['10:00', '11:00'],
            },
            {
                title: 'Lunch',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['11:00', '13:00'],
            },
            {
                title: 'L. Danukarjanto Workshop',
                location: 'IC 320',
                organizer: 'Luki Danukarjanto',
                color: colors.WORKSHOP,
                time: ['11:00', '12:00'],
            },
            {
                title: "Omar's Advanced React",
                location: 'IC 220',
                organizer: 'Omar',
                color: colors.WORKSHOP,
                time: ['11:00', '12:00'],
            },
            {
                title: 'Framework for Tackling AI/ML Challenges',
                location: 'IC 220',
                organizer: 'T4G',
                color: colors.WORKSHOP,
                time: ['12:00', '13:00'],
            },
            {
                title: 'React Native Creative Workshop',
                location: 'IC 220',
                organizer: 'Ralph / Sergey Gavrilyuk',
                color: colors.WORKSHOP,
                time: ['13:00', '16:00'],
            },
            {
                title: 'Fly With Oragami',
                location: 'TBA',
                organizer: 'Fly With Oragami',
                color: colors.WORKSHOP,
                time: ['13:00', '18:00'],
            },
            {
                title: "Nasir's Hot Dogs",
                location: 'Outside SC',
                organizer: "Nasir's Hot Dogs",
                color: colors.FOOD,
                time: ['13:00', '21:00'],
            },
            {
                title: "Founder's Beta",
                location: 'IC 320',
                organizer: 'Eric Rafat',
                color: colors.WORKSHOP,
                time: ['13:00', '14:00'],
            },
            {
                title: 'Women in Code Summit',
                location: 'IC 320',
                organizer: 'Women in Code',
                color: colors.SUMMIT,
                time: ['14:00', '17:00'],
            },
            {
                title: 'FGF Snacks',
                location: 'IC/EV Atrium',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['15:00', '17:00'],
            },
            {
                title: 'PayTrie',
                location: 'IC 220',
                organizer: 'PayTrie',
                color: colors.WORKSHOP,
                time: ['17:00', '18:00'],
            },
            {
                title: 'Dinner',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['18:00', '21:00'],
            },
            {
                title: 'Black in Tech Summit',
                location: 'IC 320',
                organizer: 'Black in Tech',
                color: colors.SUMMIT,
                time: ['18:00', '21:00'],
            },
            {
                title: 'MLH Cup Stacking',
                location: 'IC/EV Atrium',
                organizer: 'Major League Hacking',
                color: colors.MLH,
                time: ['21:00', '22:00'],
            },
            {
                title: 'Resume Roast Session',
                location: 'TBA',
                organizer: 'Moe Ali',
                color: colors.WORKSHOP,
                time: ['22:00', '23:00'],
            },
            {
                title: 'NoSQL Workshop',
                location: 'IC 220',
                organizer: 'Kevin Shen',
                color: colors.WORKSHOP,
                time: ['22:00', '23:00'],
            },
            {
                title: 'Docker DevOps Workshop',
                location: 'IC 220',
                organizer: 'Samiul Haque',
                color: colors.WORKSHOP,
                time: ['23:00', '0:00'],
            },
            {
                title: 'PowerPoint Improv',
                location: 'TBA',
                organizer: 'Moe Ali',
                color: colors.WORKSHOP,
                time: ['0:00', '1:00'],
            },
        ],
    },
    {
        date: new Date(2020, 1, 16),
        events: [
            {
                title: 'Breakfast',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['8:00', '10:00'],
            },
            {
                title: 'Project Submission',
                location: 'TBA',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['10:00', '10:30'],
            },
            {
                title: 'Judging',
                location: 'IC/EV Atrium',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['11:00', '15:00'],
            },
            {
                title: 'Late Lunch',
                location: 'IC 120',
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['13:00', '15:00'],
            },
            {
                title: 'Closing Ceremony',
                location: 'IC 130',
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['15:00', '17:00'],
            },
        ],
    },
];
