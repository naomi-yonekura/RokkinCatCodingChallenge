
import React from 'react';
// * Import and assets here

// * Import any Compoenents here
import AddRecipie from './addRecipie';
import RecipieTable from './recipieTable';
import EditRecipie from './editRecipie';
import ShowRecipie from './showRecipie';
import { MuiThemeProvider } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Cake from 'material-ui/svg-icons/social/cake';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';

import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { darkBlack } from 'material-ui/styles/colors';
import { IconButton } from 'material-ui';

// ? Import the "database" here?

let emptyRecipie = {
    title: '',
    key: '',
    description: '',
    prepTime: '',
    foodType: '',
    difficulty: '',
    amountFeed: '',
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
            keys = keys.split(',');
        }
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

        let reveresdRecipies = [];
        let recipies = [];

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
            <Router>
                <section>
                    <AppBar title="Naomi Yonekura's Online Recipe Book" primary={true}
                        // titleStyle={{ color: '#000000' }}
                        iconElementLeft={<Cake style={{ width: 40, height: 40, color: '#ffffff' }} />}
                        iconElementRight={
                            <section>
                                <Link to='/addRecipe' >
                                    <RaisedButton label="Add Recipe" secondary={true} />
                                </Link>
                                <Link to='/' style={{ margin: 20 }}>
                                    <RaisedButton label="Home" secondary={true} />
                                </Link>
                            </section>}
                        style={{ marginBottom: 20 }}
                    />



                    <Link to='/' >
                        <RaisedButton label="Home" secondary={true} />
                    </Link>

                    <Link to='/addRecipe'>
                        <RaisedButton label="Add Recipe" secondary={true} />
                    </Link>
                    <Link to='/editRecipe'>
                        <RaisedButton label="Edit Recipe" primary={true} />
                    </Link>
                    <Link to='/showRecipe'>
                        <RaisedButton label="Show Recipe" secondary={true} />
                    </Link>
                    <p>removing above buttons later</p>

                    <Switch>
                        <Route exact={true} path="/" render={() => {
                            return (
                                <section>
                                    <h1>Home Page</h1>
                                    <RecipieTable
                                        allRecipies={this.state.allKeys}
                                        choosenRecipie={this.choosenRecipie}
                                    ></RecipieTable>
                                </section>
                            );
                        }} />

                        <Route path="/addRecipe" render={() => {
                            return (
                                <AddRecipie newRecipie={this.newRecipie}></AddRecipie>
                            );
                        }} />

                        <Route path="/editRecipe" render={() => {
                            return (
                                <EditRecipie
                                    editingRecipie={this.state.editingRecipie}
                                    saveEditedRecipie={this.saveEditedRecipie}
                                ></EditRecipie>
                            );
                        }} />

                        <Route path="/showRecipe" render={() => {
                            return (
                                <ShowRecipie
                                    selectedRecipie={this.state.selectedRecipie}
                                    editRecipie={this.editRecipie}
                                    deleteRecipie={this.deleteRecipie}
                                ></ShowRecipie>
                            );
                        }} />
                    </Switch>
                </section>
            </Router>


        );
    }


}


