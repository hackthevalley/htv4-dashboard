import React from 'react';

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
                description: ``,
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['18:00', '20:00'],
            },
            {
                title: 'Dinner',
                location: 'IC 120',
                description: `Pizza`,
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['18:00', '20:00'],
            },
            {
                title: 'Team Building Workshop',
                location: 'IC 110',
                description: `Don't have a team? No sweat! Stick back after opening ceremony and we'll help you form your group!`,
                organizer: 'Hack The Valley - Moe Ali',
                color: colors.HTV,
                time: ['19:00', '20:00'],
            },
            {
                title: 'Opening Ceremony',
                location: 'IC 130',
                description: ``,
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['20:00', '22:00'],
            },
            {
                title: 'Team Building Workshop #2',
                location: 'IC 110',
                description: `Still don't have a team? No sweat! Come to IC110 and we'll help you form your group!`,
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['22:00', '23:00'],
            },
            {
                title: 'Facebook Workshop',
                location: 'IC 130',
                description: ``,
                organizer: 'Facebook',
                color: colors.WORKSHOP,
                time: ['23:00', '1:00'],
            },
            {
                title: 'Midnight Snack',
                location: 'IC 120 / IC 318',
                description: (
                    <>
                        <img
                            alt="boba life"
                            width="100%"
                            src="https://thumbs.gfycat.com/PassionateVagueCattle-size_restricted.gif"
                        />
                        and Croissants (Croissants at IC 120)
                    </>
                ),
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['0:30', '1:30'],
            },
            {
                title: 'Intro to APIs with GCP',
                location: 'IC 220',
                description: ``,
                organizer: 'Kaveen',
                color: colors.WORKSHOP,
                time: ['1:00', '2:00'],
            },
            {
                title: 'GraphQL Workshop',
                location: 'IC 320',
                description: `Learn how GraphQL works, play around with a real API, and write a simple Python program to search your favourite dishes! You will need a laptop with Python 3 installed.`,
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
                description: `Crepes`,
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['8:00', '10:00'],
            },
            {
                title: 'How to Find and Validate a Valuable Idea',
                location: 'IC 120',
                description: ``,
                organizer: 'Hack The Valley',
                color: colors.WORKSHOP,
                time: ['8:00', '9:00'],
            },
            {
                title: '1517 Office Hours',
                location: 'IC Atrium',
                description: ``,
                organizer: '1517 Fund',
                color: colors.WORKSHOP,
                time: ['9:00', '11:30'],
            },
            {
                title: 'Intro to React',
                location: 'IC 220',
                description: ``,
                organizer: 'Frederic Pun',
                color: colors.WORKSHOP,
                time: ['9:00', '10:00'],
            },
            {
                title: 'Data Sketching Workshop',
                location: 'IC 220',
                description: ``,
                organizer: 'William Yun',
                color: colors.WORKSHOP,
                time: ['10:00', '11:00'],
            },
            {
                title: 'Fuse Workshop',
                location: 'IC 320',
                description: `What could be more cool than talking about FUSION and how it works with technology? AI is reshaping every industry, today. Fusion energy could be compared to be at a similar state in ~5 years ago. Fusion energy is going to be a game changer to a ton of industries: medicine, electricity, space thrusters, transportation, etc. Interstellar travel? Fusion propulsion is the key to unlocking the vast distances beyond orbit. With the cost to Low Earth Orbit (LEO) plummeting, space is about to be open for business. An unimaginable abundance of resources awaits. So the next big thing? Fusion energy!`,
                organizer: 'FUSE',
                color: colors.WORKSHOP,
                time: ['10:00', '11:00'],
            },
            {
                title: 'Lunch',
                location: 'IC 120',
                description: `Chicken Chow Mein & Spring Rolls`,
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['11:00', '13:00'],
            },
            {
                title: 'L. Danukarjanto Workshop',
                location: 'IC 320',
                description: ``,
                organizer: 'Luki Danukarjanto',
                color: colors.WORKSHOP,
                time: ['11:00', '12:00'],
            },
            {
                title: 'Advanced React',
                location: 'IC 220',
                description: `Take your React code to the next level: hooks, portals, context, suspense, and error boundaries.`,
                organizer: 'Omar Chehab',
                color: colors.WORKSHOP,
                time: ['11:00', '12:00'],
            },
            {
                title: 'Framework for Tackling AI/ML Challenges',
                location: 'IC 220',
                description: ``,
                organizer: 'T4G',
                color: colors.WORKSHOP,
                time: ['12:00', '13:00'],
            },
            {
                title: 'React Native Creative Workshop',
                location: 'IC 220',
                description: ``,
                organizer: 'Ralph / Sergey Gavrilyuk',
                color: colors.WORKSHOP,
                time: ['13:00', '16:00'],
            },
            {
                title: 'Fly With Oragami',
                location: 'TBA',
                description: ``,
                organizer: 'Fly With Oragami',
                color: colors.WORKSHOP,
                time: ['13:00', '18:00'],
            },
            {
                title: "Nasir's Hot Dogs",
                location: 'Outside SC',
                description: `Hot dogs (obviously) - available from 1pm to 9pm`,
                organizer: "Nasir's Hot Dogs",
                color: colors.FOOD,
                time: ['13:00', '21:00'],
            },
            {
                title: "Founder's Beta",
                location: 'IC 320',
                description: ``,
                organizer: 'Eric Rafat',
                color: colors.WORKSHOP,
                time: ['13:00', '14:00'],
            },
            {
                title: 'Women in Code Summit',
                location: 'IC 320',
                description: ``,
                organizer: 'Women in Code',
                color: colors.SUMMIT,
                time: ['14:00', '17:00'],
            },
            {
                title: 'FGF Snacks',
                location: 'IC/EV Atrium',
                description: `Muffins, Loaves and Croissants. Yum!`,
                organizer: 'FGF Brands',
                color: colors.FOOD,
                time: ['15:00', '17:00'],
            },
            {
                title: 'Dinner',
                location: 'IC 120',
                description: `Fettuccine Alfredo & Garlic Toast`,
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['18:00', '21:00'],
            },
            {
                title: 'Black in Tech Summit',
                location: 'IC 320',
                description: ``,
                organizer: 'Black in Tech',
                color: colors.SUMMIT,
                time: ['18:00', '21:00'],
            },
            {
                title: 'MLH Cup Stacking',
                location: 'IC/EV Atrium',
                description: ``,
                organizer: 'Major League Hacking',
                color: colors.MLH,
                time: ['21:00', '22:00'],
            },
            {
                title: 'Resume Roast Session',
                location: 'IC 130',
                description: `Let ourselves and a group of recruiters and talent specialists roast and pick apart your resume!`,
                organizer: 'Hack the Valley - Moe Ali',
                color: colors.HTV,
                time: ['22:00', '23:00'],
            },
            {
                title: 'NoSQL Workshop',
                location: 'IC 220',
                description: ``,
                organizer: 'Kevin Shen',
                color: colors.WORKSHOP,
                time: ['22:00', '23:00'],
            },
            {
                title: 'HTV T-shirts',
                location: 'IC Artium',
                description: ``,
                organizer: 'Hack the Valley',
                color: colors.HTV,
                time: ['22:30', '23:30'],
            },
            {
                title: 'Docker DevOps Workshop',
                location: 'IC 220',
                description: ``,
                organizer: 'Samiul Haque',
                color: colors.WORKSHOP,
                time: ['23:00', '0:00'],
            },
            {
                title: 'PowerPoint Improv',
                location: 'TBA',
                description: `Join us for a game of PowerPoint Improv where candidates perform a presentation using a slideshow they've never seen before, for a chance to WIN a MUSE HEADBAND. We'll help you with your presentation skills to nail that pitch (and also it's just really funny).`,
                organizer: 'Hack the Valley - Moe Ali',
                color: colors.HTV,
                time: ['0:00', '1:00'],
            },
            {
                title: 'System Administration Workshop',
                location: 'IC 220',
                description: `Learn the basics of Linux shell scripting
Learn about the client-server model
Deploy your hackathon project to the cloud`,
                organizer: 'Omar Chehab',
                color: colors.WORKSHOP,
                time: ['1:00', '2:00'],
            },
        ],
    },
    {
        date: new Date(2020, 1, 16),
        events: [
            {
                title: 'Breakfast',
                location: 'IC 120',
                description: `Pancakes and Sausages`,
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['9:00', '10:00'],
            },
            {
                title: 'Project Submission',
                location: 'TBA',
                description: ``,
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['10:00', '10:30'],
            },
            {
                title: 'Judging',
                location: 'IC/EV Atrium',
                description: ``,
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['11:00', '15:00'],
            },
            {
                title: 'Late Lunch',
                location: 'IC 120',
                description: `Curry Chicken`,
                organizer: 'Hack The Valley',
                color: colors.FOOD,
                time: ['13:00', '15:00'],
            },
            {
                title: 'Closing Ceremony',
                location: 'IC 130',
                description: ``,
                organizer: 'Hack The Valley',
                color: colors.HTV,
                time: ['15:00', '17:00'],
            },
        ],
    },
];
