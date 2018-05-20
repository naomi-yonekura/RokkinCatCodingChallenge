import React from 'react';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';

import AppBar from 'material-ui/AppBar';
import Search from 'material-ui/svg-icons/action/search';
import Person from 'material-ui/svg-icons/social/person';
import Timer from 'material-ui/svg-icons/image/timer';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
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
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.openPopup.bind(this);
        this.closePopup.bind(this);
    }

    openPopup() {
        this.setState({
            open: true,
        });
    }

    closePopup() {
        this.setState({
            open: false,
        })
    }

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
            <section>
                <AppBar title="View Recipe"
                    style={{ backgroundColor: '#e0e0e0' }}
                    titleStyle={{ color: '#000000' }}
                    iconElementLeft={<Search style={{ width: 40, height: 40 }} />}
                />
                <Card style={{ width: 700, minWidth: 500, minHeight: '30%', margin: '50 auto' }}>

                    <CardMedia overlay={
                        <CardTitle title={selectedRecipie.title} subtitle={selectedRecipie.foodType} />
                    }>
                        <img src='./images/redBlue1.jpg' alt="background" />
                    </CardMedia>

                    <CardActions>
                        <span style={{ alignItems: 'left' }}><Person style={{ margin: 5 }} /><span>{selectedRecipie.amountFeed}</span></span>
                        <span style={{ alignItems: 'center' }}><Timer style={{ margin: 5 }} /><span>{selectedRecipie.prepTime}</span></span>
                        <span style={{ alignItems: 'right' }}><ActionThumbsUpDown style={{ margin: 5 }} /><span>{selectedRecipie.difficulty}</span></span>
                    </CardActions>
                    <CardActions>
                        <Link to='/editRecipe'>
                            <FloatingActionButton secondary={true} style={style} onClick={() => editRecipie(selectedRecipie)}>
                                <Edit />
                            </FloatingActionButton>
                        </Link>




                        <FloatingActionButton secondary={true} style={style} onClick={() =>this.openPopup()}>
                            <Delete />
                        </FloatingActionButton>
                        <Popup open={this.state.open}
                            closeOnDocumentClick={false}
                            closeOnEscape={false}
                            position="top center">
                            <div>
                                <p>Are you sure you want to delete this recipe?</p>

                                <RaisedButton style={{ margin: 5 }} secondary={true} label="No" onClick={() => this.closePopup()} />


                                <Link to='/'>
                                    <RaisedButton style={{ margin: 5 }} primary={true} label="Yes" onClick={() => deleteRecipie(selectedRecipie)} />
                                </Link>
                            </div>
                        </Popup>





                    </CardActions>

                    <CardText>
                        <h3>Description</h3>
                        {descriptionArray.map(function (detail, index) {
                            return <p key={index}>
                                {detail}
                            </p>
                        })}
                    </CardText>
                    <CardText>
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
                    </CardText>
                    <CardText>
                        <h3>Steps</h3>
                        <span>
                            {arraySteps.map(function (step, index) {
                                return <li key={index}>
                                    {step}
                                </li>
                            })}
                        </span>
                    </CardText>
                </Card>
            </section>
        );
    }
}
