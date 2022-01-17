import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (
            <div className="container">
                <Navbar color="light" variant="light" light>
                    <div className="container">
                        <NavbarBrand href="/">Order</NavbarBrand>
                        <NavbarBrand href="/">Reservations</NavbarBrand>
                        <NavbarBrand href="/">Menu</NavbarBrand>
                        <NavbarBrand href="/">Contact</NavbarBrand>
                        {/* <div className="input-group">
                            <input type="search" className="form-control rounded" placeholder="Search"
                                aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="btn btn-outline-secondary">search</button>
                        </div> */}
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;