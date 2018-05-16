
import React from 'react';
// * Import and assets here

// * Import any Compoenents here
import AddRecipie from './addRecipie';
import RecipieTable from './recipieTable';
import { MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

// ? Import the "database" here?



export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // * Variables here
            // palette: props.muiTheme.palette,
            count: 0,
        };

        // ? to bind any functions in App here?
    }


    render() {
        return (
            // TODO put in a table that shows recipies in reverse cronological order here
            <section>
                <h1>Naomi's Magnifacent Online Recipie Book!</h1>
                <RaisedButton onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }} 
                // style={{color: palette.primary1Color}}
                >Add Recipie {this.state.count}</RaisedButton>
                <RecipieTable></RecipieTable>
                <AddRecipie></AddRecipie>
            </section>
        );
    }





}


