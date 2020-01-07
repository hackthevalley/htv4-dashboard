import React from 'react';
import { Paragraph, Mixins } from '@cheapreats/react-ui';
import styled from 'styled-components';

export const CollapseText = props => <Text type="span" {...props} />;

const Text = styled(Paragraph)`
    ${Mixins.flex('column')}
    ${Mixins.transition(['max-width', 'margin', 'opacity'])}
    ${({ theme }) => `
        max-width: ${theme.dimensions.navigation.width}px;   
    `}
    ${Mixins.media(
        'tablet',
        `
        max-width: 0;
        opacity: 0;
        padding: 0;
        margin: 0;
    `,
    )}
    overflow: hidden;
    white-space: nowrap;
    margin-left: 4px;
    padding-right: 16px;
    box-sizing: border-box;
`;
