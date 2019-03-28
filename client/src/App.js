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
  
  render() {

    const { classes } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <NavbarComponent />

            <Route exact path="/" component={LiquidAssets} />

            <div className="container">
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/" component={Login} />
              </Switch>
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
