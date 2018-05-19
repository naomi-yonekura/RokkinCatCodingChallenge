
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
            recipie: recipie,
            allRecpies: allRecipies,
            count: 0,
            allKeys: [],
        };

        // ? to bind any functions in App here?
        this.newRecipie = this.newRecipie.bind(this);
    }

    newRecipie(recipie) {
        // TODO fill in, save to local storage
        let title = recipie.title;

        let keys = localStorage.getItem('keys');
        if (keys === null) {
            keys = [];
        } else {
            keys = keys.replace("[", "");
            keys = keys.replace("]", "");
            keys = keys.split(',');
        }
        for(var k in keys) {
            if(k === title) {
                title = title + "1";
            }
        }
        keys.push(title);

        localStorage.setItem("" + title, JSON.stringify(recipie));
        localStorage.setItem('keys', keys);
        // this.setState((prevState, props) => {
        //     return {allKeys: keys};
        // });
        this.changeKeys(keys);

    }

    changeKeys(keys) {
        this.setState({ allKeys: keys });
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
                <RecipieTable allRecipies={this.state.allKeys}></RecipieTable>

                <AddRecipie newRecipie={this.newRecipie}></AddRecipie>
                <ShowRecipie recipie={this.state.recipie}></ShowRecipie>
            </section>
        );
    }





}


