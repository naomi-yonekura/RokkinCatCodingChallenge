/**
 * Tutorial used to set project up
 * https://www.javascriptstuff.com/react-from-scratch/
 */
import React from 'react';
// * Import and assets here

// * Import any Compoenents here

// ? Import the "database" here?


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // * Variables here
            count: 0,
        };

        // ? to bind any functions in App here?
    }


    render() {
        return (
            <section>
                <h1>Naomi's Magnifacent Online Recipie Book!</h1>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1});
                }}>Add Recipie {this.state.count}</button>

            </section>



        );
    }





}


