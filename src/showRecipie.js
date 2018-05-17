import React from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default class ShowRecipie extends React.Component {

    render() {
        return (
            <section className="show-grid">
                <h2>Showing Recipies</h2>

                <h3>Title: {this.props.recipie.title}</h3>

                <h3>Description: {this.props.recipie.description}</h3>

                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Ingrediants</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                        </TableRow>

                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.recipie.ingrediants.map(function (name, index) {
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
                        {this.props.recipie.steps.map(function (name, index) {
                            return <TableRow key={index}><TableRowColumn>{name}</TableRowColumn></TableRow>
                        })}
                    </TableBody>
                </Table>
            </section>
        );
    }
}