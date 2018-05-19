import React from 'react';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


const style = {
    margin: 10,
};
export default class ShowRecipie extends React.Component {

    render() {
        const { editRecipie } = this.props;
        const { deleteRecipie } = this.props;
        const { selectedRecipie } = this.props;

        let arraySteps = selectedRecipie.steps.split("\n");
        let descriptionArray = selectedRecipie.description.split("\n");
        if (arraySteps === undefined || arraySteps === null) {
            arraySteps = ["No steps"];
        }
        if (descriptionArray === undefined || descriptionArray === null) {
            descriptionArray = ["No description"];
        }
        return (
            <section className="show-grid">
                <h2>Showing Recipes</h2>

                <h3>Title: {selectedRecipie.title}</h3>

                <h3>Description: </h3>

                {descriptionArray.map(function(detail, index) {
                    return <p key={index}>
                        {detail}
                    </p>
                })}
                

                <FloatingActionButton style={style} onClick={() => editRecipie(selectedRecipie)}>
                    <Edit />
                </FloatingActionButton>

                <FloatingActionButton style={style} onClick={() => deleteRecipie(selectedRecipie)}>
                    <Delete />
                </FloatingActionButton>



                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Ingrediants</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                        </TableRow>

                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {selectedRecipie.ingredients.map(function (single, index) {
                            return <TableRow key={index}>
                                <TableRowColumn>{single.name}</TableRowColumn>
                                <TableRowColumn>{single.amount}</TableRowColumn>

                            </TableRow>
                        })}
                    </TableBody>
                </Table>

                <h4>Steps: </h4>

                <div>
                    {arraySteps.map(function (step, index) {
                        return <li key={index}>
                            {step}
                        </li>
                    })}
                </div>


            </section>
        );
    }
}