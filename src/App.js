import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { MENUITEMS } from './shared/menuitem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        menuitems: MENUITEMS
    };
}
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">McGhee's Eatery</NavbarBrand>
                </div>
                </Navbar>
                <Directory menuitems={this.state.menuitems} />
            </div>
        );
    }
}

export default App;