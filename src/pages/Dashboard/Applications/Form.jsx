import React, {
    useCallback,
    useEffect,
    memo,
    useReducer,
    useState,
} from 'react';
import styled from 'styled-components';
import { Button, Heading, Mixins, SmallText } from '@cheapreats/react-ui';
import { CheckboxQuestion } from './CheckboxQuestion';
import { MultiCheckboxQuestion } from './MultiCheckboxQuestion';
import { TextareaQuestion } from './TextareaQuestion';
import { TextQuestion } from './TextQuestion';

const AUTO_SAVE_TIMEOUT = 3000;

const getQuestionComponent = {
    TEXT: TextQuestion,
    TEXTAREA: TextareaQuestion,
    CHECKBOX: CheckboxQuestion,
    MULTI_CHECKBOX: MultiCheckboxQuestion,
};

// state is an object, mapping question id to a Response object
function reducer(state, action) {
    return {
        ...state,
        [action.id]: {
            ...state[action.id],
            answer: action.answer,
        },
    };
}

export const Form = ({ appId, title, questions, open, responses }) => {
    const [formResponses, _dispatch] = useReducer(
        reducer,
        initFormResponses(questions, responses),
    );
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            if (open) {
                // TODO: This should send form responses to backend
                console.log(appId, Object.values(formResponses));
            }
        },
        [appId, open, formResponses],
    );

    const dispatch = useCallback(payload => {
        setHasUpdate(true);
        _dispatch(payload);
    }, []);

    const [hasUpdate, setHasUpdate] = useState(false);
    useEffect(() => {
        let timer;
        if (hasUpdate && open) {
            timer = window.setTimeout(() => {
                // TODO: This should send form responses updates to backend
                console.log(Object.values(formResponses));
                setHasUpdate(false);
            }, AUTO_SAVE_TIMEOUT);
        }
        return () => {
            window.clearTimeout(timer);
        };
    }, [open, hasUpdate, formResponses]);

    return (
        <div>
            <Heading type="h3">{title}</Heading>
            <Status status={open} />
            <form onSubmit={onSubmit}>
                <QuestionsContainer>
                    {questions.map((question, index) => {
                        const questionProps = {
                            ...question,
                            answer: formResponses[question.id].answer,
                            readOnly: !open,
                            dispatch,
                        };
                        const component = getQuestionComponent[question.type];
                        return component ? (
                            <Question key={index}>
                                {React.createElement(component, questionProps)}
                            </Question>
                        ) : null;
                    })}
                </QuestionsContainer>
                <StyledButton type="submit" disabled={!open} primary>
                    Submit
                </StyledButton>
            </form>
        </div>
    );
};

const Status = memo(({ status, large }) => (
    <Text status={status} bold large={large}>
        <Dot status={status} large={large} />
        {status ? 'Open' : 'Status: Closed'}
    </Text>
));

function initFormResponses(questions, responses) {
    const formResponses = {};
    questions.forEach(
        question =>
            (formResponses[question.id] = {
                question,
                answer: question.default ? [question.default] : [],
            }),
    );
    responses.forEach(
        response => (formResponses[response.question.id] = response),
    );
    return formResponses;
}

const QuestionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Question = styled.div`
    margin: 10px 50px 10px 0px;
    width: 40%;
    ${Mixins.media('tablet', `width: 100%;`)}
`;

const StyledButton = styled(Button)`
    margin: 20px 0px;
`;

const Text = styled(SmallText)`
    ${Mixins.flex('flex-start', 'center')}
    ${({ status }) => `
        color: ${status ? '#28af00' : '#ee2434'};
        &:before {
            background-color: ${status ? '#28af00' : '#ee2434'};
        }
    `}
    ${({ large }) => (large ? `font-size: 1.4rem;` : '')}
`;

const Dot = styled.span`
    ${({ status }) => `
        background-color: ${status ? '#28af00' : '#ee2434'};
        &:before {
            background-color: ${status ? '#28af00' : '#ee2434'};
        }
    `}

    margin-right: 5px;
    position: relative;

    &,
    &:before {
        ${({ large }) =>
            large
                ? `
            width: 11px;
            height: 11px;
        `
                : `
            width: 9px;
            height: 9px;
        `}
        border-radius: 50%;
    }

    &:before {
        ${Mixins.transition(['transform', 'opacity'])}
        ${Mixins.position(
            'absolute',
        )}
        animation: pulse 1s ease-in-out 0s infinite;
        content: '';

        @keyframes pulse {
            from {
                transform: scale(1);
                opacity: 0.7;
            }
            to {
                transform: scale(1.9);
                opacity: 0;
            }
        }
    }
`;
