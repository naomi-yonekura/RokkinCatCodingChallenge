import React from 'react';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Row, Col } from 'react-bootstrap';


import Person from 'material-ui/svg-icons/social/person';
import Timer from 'material-ui/svg-icons/image/timer';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';


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
                <h2>Showing Recipes</h2>


                <Card>

                    <CardMedia overlay={
                        <CardTitle title={selectedRecipie.title} subtitle={selectedRecipie.foodType} />
                    }>
                        <img src='./images/background1.jpg' alt="background" />
                    </CardMedia>

                    <CardActions>
                        <Row className="show-grid">
                            <Col xs={4}>
                                <span><Person style={{ margin: 5 }} /><span>{selectedRecipie.amountFeed}</span></span>
                            </Col>
                            <Col xs={4}>
                                <span><Timer style={{ margin: 5 }} /><span>{selectedRecipie.prepTime}</span></span>
                            </Col>
                            <Col xs={4}>
                                <span><ActionThumbsUpDown style={{ margin: 5 }} /><span>{selectedRecipie.difficulty}</span></span>
                            </Col>
                        </Row>
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












                <h3>Title: {selectedRecipie.title}</h3>

                <h3>Description: </h3>

                {descriptionArray.map(function (detail, index) {
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





                <h4>Steps: </h4>




            </section>
        );
    }
}