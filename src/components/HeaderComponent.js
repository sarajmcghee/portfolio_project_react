import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>McGhee's Eatery</h3>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar className="navbar-custom mr-auto" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto"></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="navbar-light" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/order">
                                        <i className="fa fa-list fa-lg" /> Order Online
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/reservations">
                                        <i className="fa fa-info fa-lg" /> Reservations
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <i className="fa fa-info fa-lg" /> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem className="justify-content-end">
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>



            </React.Fragment>
        );
    }
}

export default Header;