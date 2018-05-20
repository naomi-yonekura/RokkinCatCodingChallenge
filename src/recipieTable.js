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
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Search from 'material-ui/svg-icons/action/search';
import List from 'material-ui/svg-icons/action/list';
import AppBar from 'material-ui/AppBar';

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
                    recipies.push(temp);
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

                <AppBar title="Your Recipes"
                    style={{ backgroundColor: '#e0e0e0' }}
                    titleStyle={{ color: '#000000' }}
                    iconElementLeft={<List style={{ width: 40, height: 40 }} />}
                />

                <Table onCellClick={(rowNumber, columnId) => choosenRecipie(rowNumber)}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Prep Time</TableHeaderColumn>
                            <TableHeaderColumn>Difficulty</TableHeaderColumn>
                            <TableHeaderColumn>View Recipe</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>

                        {names.map(function (name, index) {
                            return <TableRow key={index}>

                                <TableRowColumn>
                                    {name.title}
                                </TableRowColumn>
                                <TableRowColumn>
                                    {name.prepTime}
                                </TableRowColumn>
                                <TableRowColumn>
                                    {name.difficulty}
                                </TableRowColumn>
                                <TableRowColumn>
                                    <Link to='/showRecipe'>
                                        <FloatingActionButton secondary={true}>
                                            <Search />
                                        </FloatingActionButton>
                                    </Link>
                                </TableRowColumn>

                            </TableRow>
                        })}

                    </TableBody>

                </Table>

            </section>
        );
    }
}
