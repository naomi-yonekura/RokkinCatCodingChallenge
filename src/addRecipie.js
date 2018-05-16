import React from 'react';
import TextField from 'material-ui/TextField';

class Ingrediants {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}

export default class AddRecipie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            ingrediants: Array(5).fill(null),
        };
    }

    render() {
        return (
            <section>
                <h1>Add Recipie</h1>
                <TextField floatingLabelText="Title"/>
                <br /><TextField floatingLabelText="Description"
                                multiLine={true} rows={4} />
                <br />

            </section>

        );
    }

    test() {
        let test = [{ name: 'apple', amount: '5' }];
        test.push({ name })
    }


}

