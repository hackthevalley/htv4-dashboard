import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Radio } from '@cheapreats/react-ui';
import { LabelLayout } from '@cheapreats/react-ui/dist/__Layouts';

export const CheckboxQuestion = ({
    id,
    answer,
    dispatch,
    required,
    ...props
}) => {
    const [hasAnswered, setHasAnswered] = useState(answer.length > 0);
    const onChange = useCallback(
        index => {
            const newAnswer = hasAnswered && answer[0] === index ? [] : [index];
            dispatch({ id, answer: newAnswer });
            setHasAnswered(newAnswer.length > 0);
        },
        [id, dispatch, answer, hasAnswered, setHasAnswered],
    );
    const checkedOption = useMemo(() => (hasAnswered ? answer[0] : '-1'), [
        hasAnswered,
        answer,
    ]);
    const isRequired = useMemo(() => required && !hasAnswered, [
        required,
        hasAnswered,
    ]);

    return (
        <LabelLayout label={props.title} description={props.info}>
            {props.options.map((option, index) => (
                <StyledRadio
                    key={index}
                    name={id}
                    label={option}
                    value={index.toString() === checkedOption}
                    disabled={props.readOnly}
                    onChange={() => onChange(index.toString())}
                    padding="5px 10px"
                    required={isRequired}
                />
            ))}
        </LabelLayout>
    );
};

const StyledRadio = styled(Radio)`
    display: block;
`;
