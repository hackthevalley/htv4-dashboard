import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Textarea } from '@cheapreats/react-ui';

export const TextareaQuestion = ({ answer, dispatch, ...props }) => {
    const onChange = useCallback(
        ({ target }) => dispatch({ id: target.name, answer: [target.value] }),
        [dispatch],
    );
    const value = useMemo(() => (answer.length ? answer[0] : ''), [answer]);

    return (
        <StyledTextarea
            name={props.id}
            label={props.title}
            description={props.info}
            value={value}
            readOnly={props.readOnly}
            onChange={onChange}
            required={props.required}
        />
    );
};

const StyledTextarea = styled(Textarea)`
    max-width: 400px;
`;
