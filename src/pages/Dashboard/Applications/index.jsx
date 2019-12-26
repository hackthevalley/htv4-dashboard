import React, { useState, useEffect } from 'react';
import { FeatherAlt } from 'styled-icons/fa-solid/FeatherAlt';
import { DashboardPage } from '../../../components';
import { Form } from './Form';

const applications = {
    id: 2,
    form: {
        title: 'Create Account',
        questions: [
            {
                id: 0,
                title: 'Name',
                info: 'last name, first name',
                options: [],
                default: 'John Doe',
                type: 'TEXT',
                required: true,
            },
            {
                id: 1,
                title: 'Biography',
                info: 'We want to know more about you!',
                options: [],
                default: 'I love winter!',
                type: 'TEXTAREA',
                required: true,
            },
            {
                id: 2,
                title: 'Student Status',
                info: 'What level of education are you at?',
                options: [
                    'High School Student',
                    'University Student',
                    'Graduated',
                ],
                default: '1',
                type: 'CHECKBOX',
                required: true,
            },
            {
                id: 3,
                title: 'Courses Taken',
                info: 'What courses have you taken?',
                options: ['CSCA08', 'CSCC01', 'MATB24', 'ANTA01'],
                default: '',
                type: 'MULTI_CHECKBOX',
                required: true,
            },
        ],
        open: true,
        ends_at: new Date(),
    },
    responses: [
        {
            question: {
                id: 3,
                title: 'Courses Taken',
                info: 'What courses have you taken?',
                options: ['CSCA08', 'CSCC01', 'MATB24', 'ANTA01'],
                default: '',
                type: 'MULTI_CHECKBOX',
            },
            answer: ['1', '3'],
        },
    ],
};

export const Applications = () => {
    const [app, setApp] = useState();
    useEffect(() => {
        let mounted = true;
        (async () => {
            window.setTimeout(() => {
                if (mounted) setApp(applications);
            }, 1000);
        })();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <DashboardPage heading="Applications" loading={!app}>
            {app && (
                <Form
                    appId={app.id}
                    title={app.form.title}
                    questions={app.form.questions}
                    open={app.form.open}
                    responses={app.responses}
                />
            )}
        </DashboardPage>
    );
};

Applications.routeProps = {
    path: '/:id/app',
    icon: FeatherAlt,
    exact: true,
};
