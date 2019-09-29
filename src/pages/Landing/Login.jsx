import React from 'react';
import './App.css';
import './index.js';
import { LandingPage } from '../../components';
import {Button } from '@cheapreats/react-ui';

export const Login = () => {
    return( 
        <LandingPage>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div class="split left" id="leftdesktop">
                <div class="centered" id="leftdesktop2">
                    <h2>Hacker Dashboard</h2>
                    <h4>Please login or sign up if you haven't already.</h4>
                    <form name="sendlogininfo">
                        <h3>Email</h3> 
                        <input type="text" name="email" placeholder="  Your hacker email"/><br/>
                        <h3>Password</h3>
                        <input type="password" name="passw" placeholder="  Your secret salt"/><br/> <br/>
                        <Button style="black=false;"></Button> <Button text="Sign Up" value="Sign Up" name="signup" id="signup"></Button>
                    </form>
                </div>
            </div>
            <div class="split right" id="rightdesktop">
                <div class="centered">
                    <h1>Hack the Valley 4</h1>
                </div>
            </div>
        </LandingPage>
    );
};
