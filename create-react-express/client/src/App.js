import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./FormComponent/FormComponent";
import LoginComponent from "./LoginComponent/LoginComponent"


class App extends Component {
  render() {
    return (
      <div className="App">
        <FormComponent />
        {/* <LoginComponent /> */}
      </div>
    );
  }
}

export default App;
