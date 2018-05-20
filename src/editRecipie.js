import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Remove from 'material-ui/svg-icons/content/remove';
import Snackbar from 'material-ui/Snackbar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Edit from 'material-ui/svg-icons/image/edit';

import AppBar from 'material-ui/AppBar';


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default class EditRecipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.editingRecipie.title,
            key: this.props.editingRecipie.key,
            prepTime: this.props.editingRecipie.prepTime,
            foodType: this.props.editingRecipie.foodType,
            difficulty: this.props.editingRecipie.difficulty,
            amountFeed: this.props.editingRecipie.amountFeed,
            description: this.props.editingRecipie.description,
            ingredients: this.props.editingRecipie.ingredients,
            steps: this.props.editingRecipie.steps,
            open: false,
        };
    }

    changeTitle(newValue) {
        this.setState({ title: newValue });
    }

    changeDescription(newValue) {
        this.setState({ description: newValue });
    }

    changePrepTime(newValue) {
        this.setState({ prepTime: newValue });
    }

    changeFoodType(newValue) {
        this.setState({ foodType: newValue });
    }

    changeDifficulty(newValue) {
        this.setState({ difficulty: newValue });
    }

    changeAmountFeed(newValue) {
        this.setState({ amountFeed: newValue });
    }

    changeSteps(newValue) {
        this.setState({ steps: newValue });
    }

    changeIngredient(index, newValue) {
        const newIngredients = this.state.ingredients.map((ingredient, newIndex) => {
            if (index !== newIndex) return ingredient;
            // Make the new input the value of the ingridient at that index
            ingredient.name = newValue;
            return ingredient;
        });
        this.setState({ ingredients: newIngredients });
    }

    changeAmount(index, newValue) {
        const newAmount = this.state.ingredients.map((ingredient, newIndex) => {
            if (index !== newIndex) return ingredient;
            // Make the new amount the value of the ingridient at that index
            ingredient.amount = newValue;
            return ingredient;
        });
        this.setState({ ingredients: newAmount });
    }

    handleRemove(index) {
        this.setState({
            // Remove the value if it's index is the same as the pass in index
            // ingredients: this.state.ingredients.filter((ingredient, newIndex) => index !== newIndex)
            ingredients: this.state.ingredients.filter((ingredient, newIndex) => index !== newIndex)
        });
    }

    handleAdd() {
        this.setState({
            // Concat returns a new array so React realizes something has changed because mutating does not guarentee that
            ingredients: this.state.ingredients.concat([{ name: '', amount: '' }])
        });
    }

    submit() {
        if (this.state.title !== "") {
            let recipie = {
                title: this.state.title,
                key: this.state.key,
                prepTime: this.state.prepTime,
                foodType: this.state.foodType,
                difficulty: this.state.difficulty,
                amountFeed: this.state.amountFeed,
                description: this.state.description,
                ingredients: this.state.ingredients,
                steps: this.state.steps,
            };
            const { saveEditedRecipie } = this.props;
            saveEditedRecipie(recipie);
        } else {
            this.setState({
                open: true,
            });
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.editingRecipie !== this.props.editingRecipie) {
            this.setState({
                title: newProps.editingRecipie.title,
                key: newProps.editingRecipie.key,
                description: newProps.editingRecipie.description,
                ingredients: newProps.editingRecipie.ingredients,
                steps: newProps.editingRecipie.steps,
            });
        }
    }

    render() {
        const { editingRecipie } = this.props;

        let arraySteps = editingRecipie.steps.split("\n");
        let descriptionArray = editingRecipie.description.split("\n");
        if (arraySteps === undefined || arraySteps === null) {
            arraySteps = ["No steps"];
        }
        if (descriptionArray === undefined || descriptionArray === null) {
            descriptionArray = ["No description"];
        }
        return (
            <section>
                <AppBar title="Edit Recipe" 
                    style={{backgroundColor: '#e0e0e0'}} 
                    titleStyle={{color: '#000000'}}
                    iconElementLeft={<Edit style={{width: 40, height: 40}}/>}
                />
                <Card style={{ width: 700, minWidth: 500, minHeight: '30%', margin: '50 auto' }}>
                    <CardText>
                        <TextField floatingLabelText="Title"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            onChange={(event, newValue) => this.changeTitle(newValue)}
                            value={this.state.title} />
                        <br />

                        <TextField floatingLabelText="Description"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            onChange={(event, newValue) => this.changeDescription(newValue)}
                            multiLine={true} rows={4}
                            value={this.state.description} />
                        <br />

                        <br /><TextField value={this.state.prepTime} floatingLabelText="Prep Time"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            onChange={(event, newValue) => this.changePrepTime(newValue)} />
                        <br /><TextField value={this.state.foodType} floatingLabelText="Type of Food"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            onChange={(event, newValue) => this.changeFoodType(newValue)} />
                        <br /><TextField value={this.state.difficulty} floatingLabelText="Difficulty"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            onChange={(event, newValue) => this.changeDifficulty(newValue)} />
                        <br /><TextField value={this.state.amountFeed} floatingLabelText="Amount of People Feed"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            onChange={(event, newValue) => this.changeAmountFeed(newValue)} />

                        {this.state.ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <TextField
                                    floatingLabelText="Ingredient"
                                    underlineStyle={{ color: '#000000' }}
                                    floatingLabelStyle={{ color: '#000000' }}
                                    floatingLabelFocusStyle={{ color: '#000000' }}
                                    value={ingredient.name}
                                    onChange={(event, newValue) => this.changeIngredient(index, newValue)}
                                />
                                <TextField
                                    floatingLabelText="Amount"
                                    underlineStyle={{ color: '#000000' }}
                                    floatingLabelStyle={{ color: '#000000' }}
                                    floatingLabelFocusStyle={{ color: '#000000' }}
                                    value={ingredient.amount}
                                    onChange={(event, newValue) => this.changeAmount(index, newValue)}
                                />
                                <FloatingActionButton secondary={true} onClick={() => this.handleRemove(index)}>
                                    <Remove />
                                </FloatingActionButton>
                            </div>
                        ))}
                        <TextField floatingLabelText="Steps"
                            underlineStyle={{ color: '#000000' }}
                            floatingLabelStyle={{ color: '#000000' }}
                            floatingLabelFocusStyle={{ color: '#000000' }}
                            multiLine={true} rows={4}
                            onChange={(event, newValue) => this.changeSteps(newValue)}
                            value={this.state.steps} />

                        <RaisedButton style={{ margin: 10, minWidth: 100 }} secondary={true} onClick={() => this.handleAdd()}
                            label="Add Ingredient"></RaisedButton>
                        <RaisedButton primary={true} onClick={() => this.submit()} label="Save Recipe"></RaisedButton>

                        <Link to='/'>
                            <RaisedButton style={{ margin: 10 }} secondary={true} label="Return"></RaisedButton>
                        </Link>
                        <Snackbar
                            open={this.state.open}
                            message="Please enter a title"
                            autoHideDuration={2000}
                        />
                    </CardText>
                </Card>
            </section>
        );
    }
}
