import React from 'react';

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

let startingSelectedRecipie ={
    title: 'Example Title',
    key: 'Null',
    description: 'Example Description',
    prepTime: 'Example Time',
    foodType: 'Example Type',
    difficulty: 'Example Difficuluty',
    amountFeed: 'Example Amount',
    ingredients: [
        { name: 'Example Ingredient', amount: 'Exmaple Amount' },
    ],
    steps: 'Example Steps',
}

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingRecipie: emptyRecipie,
            selectedRecipie: startingSelectedRecipie,
            count: 0,
            allKeys: [],
        };
        this.newRecipie = this.newRecipie.bind(this);
        this.choosenRecipie = this.choosenRecipie.bind(this);
        this.editRecipie = this.editRecipie.bind(this);
    }

    newRecipie(recipie) {
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
        localStorage.removeItem(recipie.key);
        localStorage.setItem("" + recipie.key, JSON.stringify(recipie));
    }


    render() {
        return (
            <Router>
                <section>
                    <AppBar title="Naomi Yonekura's Online Recipe Book" primary={true}
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

                    <Switch>
                        <Route exact={true} path="/" render={() => {
                            return (
                                <section>
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
