import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import LiquidAssets from './LiquidAssets'
import NavbarComponent from './NavbarComponent'
import Signup from './components/user/register';
import Login from './components/user/login';
import PrivateRoute from './components/user/privateRoute';

import axios from 'axios';
// import FormComponent from "./LiquidAssets/FormComponent";
// import ImageComponent from "./LiquidAssets/ImageComponent";
// import TableComponent from "./LiquidAssets/TableComponent";


// check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  // decode the token and get user info
  const decoded = jwtDecode(localStorage.jwtToken);

  // set current user w/ decoded token and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for an expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // force the user log out
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}


class App extends Component {
        state = {
            brandStyle: ``,
            bottleSize: ``,
            unopenedBottles: ``,
            bottleCost: ``,
            bottleWeight: ``,
            percentageLeft: ``,
            totalBrandStyleValue: ``
        };


    // TODO: this needs to go inside of a onClick handler function that can be passed into the button.  This will post the state of the form to the route that I choose the post route to be.  Might have to make a variable and put the states into a variable

    componentDidMount() {
      this.getAlcohol();
    }

    getAlcohol = () => {
      return axios.get('/api/alcohol')
          .then((response) => {
              console.log(response);
              this.setState({
                brandStyle: response.brandStyle,
                bottleSize: response.bottleSize,
              })
          })
          .catch((error) => {
              console.log(error);
          });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    postToInventory = () => {
        return axios.post('/api/inventory', {
            brandStyle: this.state.brandStyle
        })
            .then((response) => {
                console.log(response)
            })
    }

    check = () => {
        console.log(this.state)
    }
  
  render() {

    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <NavbarComponent />

            <Route exact path="/" component={LiquidAssets} />

{/* <<<<<<< HEAD */}
            <div className="container">
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/" component={Login} />
              </Switch>
            </div>
{/* =======
        <LiquidAssets />
        <FormComponent 
        handleInputChange={this.handleInputChange}

        />
        <ImageComponent />
        <TableComponent />
>>>>>>> 495ff6361d14d5583c9f3eb23747966d4b48cc0d */}

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
