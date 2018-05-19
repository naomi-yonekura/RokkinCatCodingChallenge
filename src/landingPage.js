
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

let emptyRecipie = {
    title: "",
    description: "",
    ingrediants: [
        { ingrediant: "", amount: "" },
    ],
    steps: [""],
}

// TODO get the recipies and populate here
let allRecipies = ["hi", "hello", "goodbye"];

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // * Variables here
            // currentRecipie: currentRecipie,
            selectedRecipie: emptyRecipie,
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
            keys = keys.split(',');        }
        for (var k in keys) {
            if (k === title) {
                title = title + "1";
            }
        }
        keys.push(title);

        localStorage.setItem("" + title, JSON.stringify(recipie));
        localStorage.setItem('keys', keys);
        this.setState({ allKeys: keys });

    }


    editRecipie(recipie) {

    }

    deleteRecipie(recipie) {
        let keys = localStorage.getItem('keys');
        keys = keys.replace("[", "");
        keys = keys.replace("]", "");
        keys = keys.split(',');
        recipie = localStorage.getItem(keys[1]);
        console.log('recipie: ', recipie);


        console.log('Before splice: ', keys);
        console.log('splicing: ', recipie.title);
        keys.splice(keys.indexOf(recipie.title), 1);
        console.log('After splice: ', keys);
        // localStorage.removeItem(recipie.title);
    }

    choosenRecipie(rowNumber) {
        let keys = localStorage.getItem('keys');
        keys = keys.replace("[", "");
        keys = keys.replace("]", "");
        keys = keys.split(',');
        
        let reveresdRecipies=[];
        let recipies=[];

        for (var k in keys) {
            let temp = JSON.parse(localStorage.getItem(keys[k]));
            if (temp !== null) {
                recipies.push(temp);
            }
        }
        // TODO possibley remove this an instead take the minus the length by the index to find the cronological index instead of the reverse one we got
        for (let i = 0; i < recipies.length; i) {
            // This is putting the recipies in reverse cronological order
            reveresdRecipies.push(recipies.pop());
        }
        // ! Change the selectedRecipie to just calling/rendering the showRecipie component and just pass it in?
        let selectedRecipie = reveresdRecipies[rowNumber];
        this.setState({ selectedRecipie: selectedRecipie });
    }


    render() {
        return (
            // TODO put in a table that shows recipies in reverse cronological order here
            <section>
                <h1>Naomi's Amazing Online Recipe Book!</h1>
                <RaisedButton primary={true} onClick={() => {
                    localStorage.clear();
                }}
                >Clear Local Storage</RaisedButton>
                <RecipieTable 
                    allRecipies={this.state.allKeys}
                    choosenRecipie={this.choosenRecipie}
                ></RecipieTable>

                <AddRecipie newRecipie={this.newRecipie}></AddRecipie>
                <ShowRecipie
                    selectedRecipie={this.state.selectedRecipie}
                    editRecipie={this.editRecipie}
                    deleteRecipie={this.deleteRecipie}
                ></ShowRecipie>
            </section>
        );
    }


}


