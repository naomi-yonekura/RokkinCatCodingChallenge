import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RenderToLayer from 'material-ui/internal/RenderToLayer';

// TODO get the recipies and populate here
let recipies = ["hi", "hello", "goodbye"];

export default class RecipieTable extends Component {

    render() {
        return (
            <section>
                <h1>table</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            {/* <TableHeaderColumn>Date Created (?)</TableHeaderColumn> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recipies.map(function (name, index) {
                            return <TableRow key={index}><TableRowColumn>{name}</TableRowColumn></TableRow>
                        })}
                    </TableBody>
                </Table>
            </section>
        );
    }
}
