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
        const { recipie } = this.props;
        return (
            <section className="show-grid">
                <h2>Showing Recipes</h2>

                <h3>Title: {recipie.title}</h3>

                <h3>Description: {recipie.description}</h3>

                <FloatingActionButton style={style} onClick={() => editRecipie(recipie)}>
                    <Edit />
                </FloatingActionButton>

                <FloatingActionButton style={style} onClick={() => deleteRecipie(recipie)}>
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
                        {recipie.ingrediants.map(function (name, index) {
                            return <TableRow key={index}>
                                <TableRowColumn>{name.ingrediant}</TableRowColumn>
                                <TableRowColumn>{name.amount}</TableRowColumn>

                            </TableRow>
                        })}
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Steps</TableHeaderColumn>
                        </TableRow>

                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {recipie.steps.map(function (name, index) {
                            return <TableRow key={index}><TableRowColumn>{name}</TableRowColumn></TableRow>
                        })}
                    </TableBody>
                </Table>
            </section>
        );
    }
}