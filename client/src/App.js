import React, { Component, Fragment } from "react";
import './App.css';
import LiquidAssets from './LiquidAssets'
import NavbarComponent from './NavbarComponent'
import { Grid } from '@material-ui/core';

class App extends Component {
  state = {
    brandStyle: ``,
    bottleSize: ``,
    numberOfUnopenedBottles: ``,
    costPerBottle: ``,
    currentBottleWeight: ``,
    percentageLeft: ``,
    totalBrandStyleValue: ``
  }
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
