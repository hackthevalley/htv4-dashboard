import React, { useMemo } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { SmallText } from '@cheapreats/react-ui';

export const TimeColumn = ({ headerHeight, rowHeight }) => {
    const boxes = useMemo(
        () =>
            [...Array(24)].map((v, i) => (
                <Box key={i} height={rowHeight}>
                    <SmallText bold>
                        {moment.utc(i, 'H').format('h:mma')}
                    </SmallText>
                </Box>
            )),
        [rowHeight],
    );

    return (
        <Layout>
            <Box height={headerHeight - 10} />
            {boxes}
        </Layout>
    );
};

const Layout = styled.div`
    border-right: 2px solid lightgrey;
    padding: 0 5px;
`;

const Box = styled.div`
    ${({ height }) => `height: ${height}px;`}
`;
