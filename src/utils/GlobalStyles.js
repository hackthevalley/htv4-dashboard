import { createGlobalStyle } from 'styled-components';
import normal from './fonts/EuclidFlex-Light.otf';
import bold from './fonts/EuclidFlex-Regular.otf';

export const FontName = 'Euclid-Flex';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: ${FontName};
        src: url(${normal});
    }

    @font-face {
        font-family: ${FontName};
        src: url(${bold});
        font-weight: bold;
    }

    button {
        border-radius: 0 !important;
    }
`;
