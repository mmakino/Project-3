import React, { Component, Fragment } from "react";
import './App.css';
import LiquidAssets from './LiquidAssets'
import NavbarComponent from './NavbarComponent'

class App extends Component {
  
  render() {

    const { classes } = this.props;

    return (
      <div className="App">

        <NavbarComponent />

        <LiquidAssets />

      </div>
    );
  }
}

export default App;
