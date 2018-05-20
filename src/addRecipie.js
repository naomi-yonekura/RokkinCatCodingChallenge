import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Remove from 'material-ui/svg-icons/content/remove';
import Snackbar from 'material-ui/Snackbar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';

export default class AddRecipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            key: '',
            prepTime: '',
            foodType: '',
            difficulty: '',
            amountFeed: '',
            description: '',
            ingredients: [{ name: '', amount: '' }],
            steps: '',
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
                key: this.state.title,
                prepTime: this.state.prepTime,
                foodType: this.state.foodType,
                difficulty: this.state.difficulty,
                amountFeed: this.state.amountFeed,
                description: this.state.description,
                ingredients: this.state.ingredients,
                steps: this.state.steps,
            };

            const { newRecipie } = this.props;
            newRecipie(recipie);
        } else {
            this.setState({
                open: true,
            });
        }
    }



    render() {
        return (
            <section>
                <Card style={{ width: 700, minWidth: 500, minHeight: '30%', margin: '50 auto' }}>



                    <CardText>


                        <TextField floatingLabelText="Title"
                            onChange={(event, newValue) => this.changeTitle(newValue)} />

                        <br /><TextField floatingLabelText="Description" onChange={(event, newValue) => this.changeDescription(newValue)}
                            multiLine={true} rows={4} />

                        <br /><TextField floatingLabelText="Prep Time" onChange={(event, newValue) => this.changePrepTime(newValue)} />
                        <br /><TextField floatingLabelText="Type of Food" onChange={(event, newValue) => this.changeFoodType(newValue)} />
                        <br /><TextField floatingLabelText="Difficulty" onChange={(event, newValue) => this.changeDifficulty(newValue)} />
                        <br /><TextField floatingLabelText="Amount of People Feed" onChange={(event, newValue) => this.changeAmountFeed(newValue)} />

                        {this.state.ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <TextField
                                    floatingLabelText="Ingredient"
                                    value={ingredient.name}
                                    onChange={(event, newValue) => this.changeIngredient(index, newValue)} />

                                <TextField
                                    floatingLabelText="Amount"
                                    value={ingredient.amount}
                                    onChange={(event, newValue) => this.changeAmount(index, newValue)} />


                                <FloatingActionButton secondary={true} onClick={() => this.handleRemove(index)}>
                                    <Remove />
                                </FloatingActionButton>

                            </div>
                        ))}
                        <TextField floatingLabelText="Steps"
                            multiLine={true} rows={4}
                            onChange={(event, newValue) => this.changeSteps(newValue)} />

                        <RaisedButton style={{ margin: 20, minWidth: 100 }} secondary={true} onClick={() => this.handleAdd()}>Add Ingredient</RaisedButton>

                        <Link to='/'>
                            <RaisedButton style={{}} primary={true} onClick={() => this.submit()}>Add Recipe</RaisedButton>
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

