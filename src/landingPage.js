
import React from 'react';
// * Import and assets here

// * Import any Compoenents here
import AddRecipie from './addRecipie';
import RecipieTable from './recipieTable';
import EditRecipie from './editRecipie';
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
    title: '',
    key: '',
    description: '',
    ingredients: [
        { name: '', amount: '' },
    ],
    steps: '',
}


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // * Variables here
            editingRecipie: emptyRecipie,
            selectedRecipie: emptyRecipie,
            count: 0,
            allKeys: [],
        };

        // ? to bind any functions in App here?
        this.newRecipie = this.newRecipie.bind(this);
        this.choosenRecipie = this.choosenRecipie.bind(this);
        this.editRecipie = this.editRecipie.bind(this);
    }

    newRecipie(recipie) {
        // TODO fill in, save to local storage
        let title = recipie.key;

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
        this.setState({
            editingRecipie: recipie,
        })
    }

    deleteRecipie(recipie) {
        let keys = localStorage.getItem('keys');
        keys = keys.replace("[", "");
        keys = keys.replace("]", "");
        keys = keys.split(',');

        keys.splice(keys.indexOf(recipie.title), 1);
        localStorage.removeItem(recipie.title);
        localStorage.setItem('keys', keys);
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
        for (let i = 0; i < recipies.length; i) {
            // This is putting the recipies in reverse cronological order
            reveresdRecipies.push(recipies.pop());
        }
        let selectedRecipie = reveresdRecipies[rowNumber];
        this.setState({ selectedRecipie: selectedRecipie });
    }

    saveEditedRecipie(recipie) {
        console.log('saving edited reicpie: ', recipie);
        localStorage.removeItem(recipie.key);
        localStorage.setItem("" + recipie.key, JSON.stringify(recipie));
    }


    render() {
        return (
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
                <EditRecipie 
                    editingRecipie={this.state.editingRecipie}
                    saveEditedRecipie={this.saveEditedRecipie}
                ></EditRecipie>
                <ShowRecipie
                    selectedRecipie={this.state.selectedRecipie}
                    editRecipie={this.editRecipie}
                    deleteRecipie={this.deleteRecipie}
                ></ShowRecipie>
            </section>
        );
    }


}


