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
        // const { allKeys } = this.props;
        let allKeys = localStorage.getItem('keys');
        console.log('all keys: ', allKeys);
        let names = [];
        let recipies = [];
        if (allKeys !== null && allKeys !== undefined) {
            // let keys = localStorage.getItem('keys');
            let keys = allKeys;
            keys = keys.replace("[", "");
            keys = keys.replace("]", "");
            keys = keys.split(',');

            for (var k in keys) {
                let temp = JSON.parse(localStorage.getItem(k));
                if (temp === null) {
                    console.log('temp is null? heres the key: ', k);
                    console.log('here is the recipie?: ', localStorage.getItem(k));
                } else {
                    recipies.push(temp.title);
                }
            }
            for(let i = 0; i < recipies.length; i) {
                // This is putting the recipies in reverse cronological order
                names.push(recipies.pop());
            }
        } else {
            names.push('No recipies');
        }

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
                        {names.map(function (name, index) {
                            return <TableRow key={index}><TableRowColumn>{name}</TableRowColumn></TableRow>
                        })}
                    </TableBody>
                </Table>
            </section>
        );
    }
}
