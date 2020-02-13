import ReactDOM from 'react-dom';
import React from 'react';
import { Global } from '@cheapreats/react-ui';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './serviceWorker';
import { GlobalStyles } from './utils';
import { App } from './App';

const extendTheme = theme => {
    theme.dimensions.select.itemHeight = 42;
    theme.dimensions.navigation.width = 260;
    theme.dimensions.navigation.icon = 50;
    theme.dimensions.calendar = {
        width: 340,
        height: 90,
    };
    theme.font.family = `"Nunito", sans-serif`;
    theme.dimensions.radius = 0;
    theme.colors.primary = '#1ccf00';
    theme.colors.secondary = '#b1b1b1';
    return theme;
};

ReactDOM.render(
    <BrowserRouter>
        <Global extend={extendTheme}>
            <App />
            <GlobalStyles />
        </Global>
    </BrowserRouter>,
    document.getElementById('root'),
);
unregister();
