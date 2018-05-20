/**
 * Tutorial used to set project up
 * https://www.javascriptstuff.com/react-from-scratch/
 */
import React from 'react';
// * Import and assets here

// * Import any Compoenents here
import LandingPage from './landingPage';
import { MuiThemeProvider } from 'material-ui/styles';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { red } from 'material-ui/styles/colors';
import { amber500 } from 'material-ui/styles/colors';


const theme = getMuiTheme({
    palette: {
        primary1Color: '#FFC107',
        accent1Color: '#b942f4',
    }
})

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <LandingPage></LandingPage>
            </MuiThemeProvider>
        );
    }





}


