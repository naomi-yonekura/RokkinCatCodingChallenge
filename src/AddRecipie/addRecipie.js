import React from 'react';



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
            ingrediants: Array(5).fill(null);
        };
    }


    test() {
        let test = [{name: 'apple', amount: '5'}];
        test.push({name})
    }


}

