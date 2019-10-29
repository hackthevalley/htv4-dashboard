import React from 'react';
import styled from 'styled-components';
import { Mixins } from '@cheapreats/react-ui';
import { pusheen } from '../../assets';

export const SideImage = () => {
    return (
        <Image src={pusheen}>
            <Overlay>
                <Center>
                    <BigText>Hack the Valley 4</BigText>
                </Center>
            </Overlay>
        </Image>
    );
};

const Image = styled.div`
    background-image: url(${({ src }) => (src ? src : '')});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

    height: 100%;
    flex-grow: 4;

    ${Mixins.media('tablet', `display: none;`)}
`;

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const BigText = styled.div`
    position: fixed;
    font-size: xx-large;
    font-weight: bold;
    color: white;
`;
