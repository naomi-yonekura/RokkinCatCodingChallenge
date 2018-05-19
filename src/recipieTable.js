import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RenderToLayer from 'material-ui/internal/RenderToLayer';


export default class RecipieTable extends React.Component {

    render() {
        const { choosenRecipie } = this.props;
        let allKeys = localStorage.getItem('keys');
        let names = [];
        let recipies = [];
        if (allKeys !== null && allKeys !== undefined) {
            allKeys = allKeys.replace("[", "");
            allKeys = allKeys.replace("]", "");
            allKeys = allKeys.split(',');

            for (var k in allKeys) {
                let temp = JSON.parse(localStorage.getItem(allKeys[k]));
                if (temp !== null) {
                    recipies.push(temp.title);
                }
            }
            for (let i = 0; i < recipies.length; i) {
                // This is putting the recipies in reverse cronological order
                names.push(recipies.pop());
            }
        } else {
            names.push('No recipes');
        }

        return (
            <section>
                <h1>All Recipies</h1>
                <Table onCellClick={(rowNumber, columnId) => choosenRecipie(rowNumber)}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            {/* <TableHeaderColumn>Date Created (?)</TableHeaderColumn> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {names.map(function (name, index) {
                            return <TableRow key={index}><TableRowColumn>{name}</TableRowColumn></TableRow>
                        })}
                    </TableBody>
                </Table>
            </section>
        );
    }
}
