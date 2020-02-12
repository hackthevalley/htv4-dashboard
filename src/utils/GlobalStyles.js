import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    button {
        border-radius: 0 !important;
    }

    body {
        ${({ theme }) => `
            background-color: ${theme.colors.input.default};
        `}
    }

    #modal {
        z-index: 999;
    }
`;
