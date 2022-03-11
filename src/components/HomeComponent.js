import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay, Button } from 'reactstrap';
import { MENUITEM } from '../shared/menuitem';




class Home extends Component {


    RenderCard(item) {
        console.log("RenderCard");
        console.log(item);
        console.log(item.directory.directory);

        return (
            <Card></Card>
            // <Card>
            //     <CardImg src={item.directory.directory.image} alt={item.directory.directory.name} />
            //     <CardBody>
            //         <CardTitle>{item.directory.directory.name}</CardTitle>
            //         <CardText>{item.directory.directory.description}</CardText>
            //     </CardBody>
            // </Card>
        );
    }

    render() {
        return (
            <div className="container">
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
                <div className="container">
                    <div className="row">
                        <h3>OurFeatured Items</h3>
                    </div>
                    <div className="row">

                        <div className="col-md m-1">
                            <CardImg src="/assets/images/carousel1.jpg" alt="Carousel1" />
                        </div>
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/carousel2.jpg" alt="Carousel2" />
                        </div>
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/carousel3.jpg" alt="Carousel3" />
                        </div>
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/carousel4.jpg" alt="Carousel4" />
                        </div>
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/carousel5.jpg" alt="Carousel5" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/joinnow.jpg" alt="joinnow" />
                            <Button type="submit" class="btn btn-primary">Join Now</Button>
                        </div>
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/learnmore.jpg" alt="learnmore" />
                            <Button type="submit" class="btn btn-primary">Learn More</Button>
                        </div>
                        <div className="col-md m-1">
                            <CardImg src="/assets/images/orderhere.jpg" alt="orderhere" />
                            <Button type="submit" class="btn btn-primary">Order Here</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;   