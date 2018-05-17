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


export default class RecipieTable extends Component {

    render() {
        return (
            <section>
                <h1>All Recipies</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            {/* <TableHeaderColumn>Date Created (?)</TableHeaderColumn> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.recipies.map(function (name, index) {
                            return <TableRow key={index}><TableRowColumn>{name}</TableRowColumn></TableRow>
                        })}
                    </TableBody>
                </Table>
            </section>
        );
    }
}
