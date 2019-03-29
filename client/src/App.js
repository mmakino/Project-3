import React, { Component } from "react";
import './App.css';
import LiquidAssets from './LiquidAssets';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
// import FormComponent from "./LiquidAssets/FormComponent";
// import ImageComponent from "./LiquidAssets/ImageComponent";
// import TableComponent from "./LiquidAssets/TableComponent";



class App extends Component {
        state = {
          formInputs:{
            brandStyle: ``,
            bottleSize: ``,
            unopenedBottles: ``,
            bottleCost: ``,
            bottleWeight: ``,
          }            
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
    this.setState((state) => ({
      formInputs: {
        ...state.formInputs,
        [name]: value,
      }            
    }));
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
      <div className="App">

        <NavbarComponent />

        <LiquidAssets
          formInputs={this.state.formInputs}
          handleInputChange={this.handleInputChange} 
        />
        {/* <FormComponent 
        handleInputChange={this.handleInputChange}

        />
        <ImageComponent />
        <TableComponent /> */}

      </div>
    );
  }
}

export default App;
