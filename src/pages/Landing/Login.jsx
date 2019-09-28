import React from 'react';
import './App.css';
import { LandingPage } from '../../components';

export const Login = () => {
    return( 
        <LandingPage>
            <div class="split left">
                <div class="centered">
                    <h2>Hacker Dashboard</h2>
                </div>
            </div>
            <div class="split right">
                <div class="centered">
                    <h1>Hack the Valley 4</h1>
                </div>
            </div>
        </LandingPage>
    );
};
