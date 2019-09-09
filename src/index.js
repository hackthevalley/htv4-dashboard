import ReactDOM from 'react-dom';
import React from 'react';
import { Global } from '@cheapreats/react-ui';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './serviceWorker';
import { Fontfaces } from './utils';
import { App } from './App';

const extendTheme = theme => {
    theme.font.family = '"Europa", sans-serif';
    theme.colors.primary = '#1ccf00';
    return theme;
};

ReactDOM.render(
    <BrowserRouter>
        <Fontfaces />
        <Global extend={extendTheme}>
            <App />
        </Global>
    </BrowserRouter>,
    document.getElementById('root'),
);
unregister();
