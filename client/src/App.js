import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LiquidAssets from './LiquidAssets'
import NavbarComponent from './NavbarComponent'
import Signup from './components/user/register';
import Login from './components/user/login';

class App extends Component {
  
  render() {

    const { classes } = this.props;

    return (
      <Router>
        <div className="App">

          <NavbarComponent />

          <Route exact path="/" component={LiquidAssets} />

          <div className="container">
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
