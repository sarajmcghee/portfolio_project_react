import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { MENUITEM } from '../shared/menuitem';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}


function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                <CardImg src="/assets/images/Main1.jpg" alt="Mainpic" />
                </div>
                <div className="col-md m-1">
                <CardImg src="/assets/images/Main2.jpg" alt="Mainpic" />
                </div>
            </div>
            <div className="row">
                <br></br>
                <br></br>
            <h6>Our passion is for creating special moments.  Make us your first stop of the day.</h6>
            </div>
        </div>
    );
}

export default Home;   