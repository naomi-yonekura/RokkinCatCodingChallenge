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

import { red600 } from 'material-ui/styles/colors';
import { blue500 } from 'material-ui/styles/colors';



// ? Import the "database" here?


const theme = getMuiTheme({
    palette: {
        primary1Color: red600,
        accent1Color: blue500,
    }
})

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <LandingPage></LandingPage>
            </MuiThemeProvider>
        );
    }





}


