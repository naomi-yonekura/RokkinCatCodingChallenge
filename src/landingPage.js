
import React from 'react';
// * Import and assets here

// * Import any Compoenents here
import AddRecipie from './addRecipie';
import RecipieTable from './recipieTable';
import ShowRecipie from './showRecipie';
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

let recipie = {
    title: "Rice",
    description: "White rice",
    ingrediants: [
        { ingrediant: "Rice", amount: "1 cup" },
        { ingrediant: "Water", amount: "2 cups" },
    ],
    steps: ["Boil water in a pot", "Pour Rice into water", "Wait until water and rice start to boil", "Cover the pot and reduce the heat", "Wait 20 minutes"],
}

// TODO get the recipies and populate here
let allRecipies = ["hi", "hello", "goodbye"];

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // * Variables here
            // palette: props.muiTheme.palette,
            recipie: recipie,
            allRecpies: allRecipies,
            count: 0,
        };

        // ? to bind any functions in App here?
    }


    render() {
        return (
            // TODO put in a table that shows recipies in reverse cronological order here
            <section>
                <h1>Naomi's Amazing Online Recipie Book!</h1>
                <RaisedButton primary={true} onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }}
                >Add Recipie {this.state.count}</RaisedButton>
                <RecipieTable recipies={this.state.allRecpies}></RecipieTable>
                <AddRecipie></AddRecipie>
                <ShowRecipie recipie={this.state.recipie}></ShowRecipie>
            </section>
        );
    }





}


