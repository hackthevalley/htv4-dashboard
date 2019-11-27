import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Input } from '@cheapreats/react-ui';

export const TextQuestion = ({ answer, dispatch, ...props }) => {
    const onChange = useCallback(
        ({ target }) => dispatch({ id: target.name, answer: [target.value] }),
        [dispatch],
    );
    const value = useMemo(() => (answer.length ? answer[0] : ''), [answer]);

    return (
        <StyledInput
            name={props.id}
            type="text"
            label={props.title}
            description={props.info}
            value={value}
            readOnly={props.readOnly}
            onChange={onChange}
            required={props.required}
        />
    );
};

const StyledInput = styled(Input)`
    max-width: 400px;
`;
