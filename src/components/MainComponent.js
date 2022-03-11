import React, { Component } from 'react';
import { DIRECTORY } from '../shared/directory';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import OnlineOrder from './OnlineOrderComponent';
import Reservation from './ReservationComponent';
import Menu from './MenuComponent';
import { COMMENTS } from '../shared/comments';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            directory: DIRECTORY,
            comments: COMMENTS,
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home directory={this.state.directory} />
            );
        };



        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/onlineorder' component={OnlineOrder} />
                    <Route exact path='/reservation' component={Reservation} />
                    <Route exact path='/menu' component={Menu}/>
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;