import React, { Component } from 'react';
import Directory from './components/DirectoryComponent';
import Navigation from './components/NavbarComponent';
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
                <Navigation/>
                <Directory menuitems={this.state.menuitems} />
            </div>
        );
    }
}

export default App;