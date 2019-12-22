import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from '@cheapreats/react-ui';
import { LabelLayout } from '@cheapreats/react-ui/dist/__Layouts';

export const MultiCheckboxQuestion = ({
    id,
    answer,
    dispatch,
    required,
    ...props
}) => {
    const [hasAnswered, setHasAnswered] = useState(answer.length > 0);
    const isChecked = useCallback(index => answer.includes(index), [answer]);
    const onChange = useCallback(
        index => {
            const i = answer.indexOf(index);
            const newAnswer = [...answer];
            i === -1 ? newAnswer.push(index) : newAnswer.splice(i, 1);
            dispatch({ id, answer: newAnswer });
            setHasAnswered(newAnswer.length > 0);
        },
        [id, answer, dispatch, setHasAnswered],
    );
    const isRequired = useMemo(() => required && !hasAnswered, [
        required,
        hasAnswered,
    ]);

    return (
        <LabelLayout label={props.title} description={props.info}>
            {props.options.map((option, index) => (
                <StyledCheckbox
                    key={index}
                    name={id}
                    label={option}
                    value={isChecked(index.toString())}
                    disabled={props.readOnly}
                    onChange={() => onChange(index.toString())}
                    padding="5px 10px"
                    required={isRequired}
                />
            ))}
        </LabelLayout>
    );
};

const StyledCheckbox = styled(Checkbox)`
    display: block;
`;
