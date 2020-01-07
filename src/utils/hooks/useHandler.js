import { useState } from 'react';

export const useHandler = initValue => {
    const [state, setState] = useState(initValue);
    const handler = ({ target }) => {
        setState(target.value);
    };

    return [state, handler];
};
