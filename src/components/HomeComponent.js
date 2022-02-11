import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';
import { MENUITEM } from '../shared/menuitem';



class Home extends Component {

    
   RenderCard(item) {
        console.log("RenderCard");
        console.log(item);
        console.log(item.directory.directory);
  
        return (
            <Card>
                <CardImg src={item.directory.directory.image} alt={item.directory.directory.name} />
                <CardBody>
                    <CardTitle>{item.directory.directory.name}</CardTitle>
                    <CardText>{item.directory.directory.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    
    render(){
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
}

export default Home;   