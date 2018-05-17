import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class AddRecipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            name: '',
            amount: '',
            ingrediants: [{ name: '', amount: '' }],
        };
    }

    handleIngrNameChange(event, index) {
        let ingrediants = [...this.state.ingrediants];
        ingrediants[index] = event.value;
        this.setState({ ingrediants });
    }

    handleIngrAmountChange(event, index) {
        let ingrediants = [...this.state.ingrediants];
        ingrediants[index] = event.value;
        this.setState({ ingrediants });
    }

    handleIngrRemove(index) {
        let ingrediants = [...this.state.values];
        values.splice(i, 1);
        this.setState({ values });
    }

    handleIngrAdd() {
        this.setState(prevState => ({ values: [...prevState.values, '']}))
    }

    getIngrediants() {
        return this.state.ingrediants.map((ingr, index)=> {
            <div>
                <TextField 
                    onChange={this.handleIngrNameChange(this, index)}
                    floatingLabelText="Ingrediants #${index+1}" />
                <TextField 
                    onChange={this.handleIngrAmountChange(this, index)}
                    floatingLabelText="Amount" />
                <RaisedButton secondary={true} onClick={this.handleIngrRemove(index)}>-</RaisedButton>
            </div>
        });
        <RaisedButton onClick={this.handleIngrAdd}>Add Ingrediant</RaisedButton>

    }


    render() {
        return (
            <section>
                <h1>Add Recipie</h1>
                <TextField floatingLabelText="Title" />
                <br /><TextField floatingLabelText="Description"
                    multiLine={true} rows={4} />
                <br />

                {this.getIngrediants()}

                {/* {this.state.ingrediants.map((ingr, index) => {
                    <div>
                        <TextField 
                            onChange={this.handleIngrNameChange(this, index)}
                            floatingLabelText="Ingrediants #${index+1}" />
                        <TextField 
                            onChange={this.handleIngrAmountChange(this, index)}
                            floatingLabelText="Amount" />
                        <RaisedButton secondary={true} onClick={this.handleIngrRemove(index)}>-</RaisedButton>
                    </div>
                })}

                <RaisedButton onClick={this.handleIngrAdd}>Add Ingrediant</RaisedButton> */}
                {/* <RaisedButton onClick={}></RaisedButton> */}



            </section>

        );
    }



}

