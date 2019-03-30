import React, { Component } from "react";
import './App.css';
import LiquidAssets from './LiquidAssets';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';

class App extends Component {
  state = {
    formInputs: {
      brandStyle: ``,
      bottleSize: ``,
      unopenedBottles: ``,
      bottleCost: ``,
      bottleWeight: ``,
    },
    autosuggest: {
      single: '',
      suggestions: []
    }
  };

  // componentDidMount is where we set this.state.autosuggest.suggestions equal to gottenBoozeSuggestions so that it matches the way class BrandStyleIntegrationAutosuggest needs it to be written in order to work 
  componentDidMount() {
    this.getBoozeSuggestions().then((gottenBoozeSuggestions) => {
      this.setState({
        autosuggest: {
          suggestions: gottenBoozeSuggestions
        }
      });
    })
  }


  getBoozeSuggestions = () => {
    // This constructor function returns a promise containing a function that returns our data once the axios call has been resolved so that data can be passed into other areas such as in line 169 above.  "resolved" and then maps over the response.data.     
    return new Promise((resolve, reject) => {
      axios.get('/api/alcohol')
        .then((response) => {
          // We set gottenBoozeSuggestions equal to a  map that maps over the data from the api call which we will return from the function.  Map takes one argument that can be named whatever you want.  We are next setting the value of brandstyle from the response to the 'label:' key because this is the format that we need our data in for the IntegrationAutosuggest component to handle it correctly.
          let gottenBoozeSuggestions = response.data.map((boozeData) => {
            // We are returning the data in exactly the format that we need it in for the suggestions array in our state above, so that it plugs in nicely to the component.
            return { label: boozeData.brandstyle }
          })
          console.log(gottenBoozeSuggestions)
          // this resolve method is where we are passing 
          resolve(gottenBoozeSuggestions)

        })
        .catch((error) => {
          console.log(error);
        });
    })

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
  // I THINK MAYBE IF WE CREATE A DIFFERENT handleInputChange FOR 'state.autosuggest' LIKE THIS WE CAN CHANGE THE state 
  handleInputChangeForAutosuggest = event => {
    const { name, value } = event.target;
    this.setState((state) => ({
      autosuggest: {
        ...state.autosuggest,
        [name]: value,
      }
    }));
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };

  postToInventory = () => {
    return axios.post('/api/inventory', {
      brandStyle: this.formInputs.brandStyle
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
          handleChange={(name) => this.handleChange(name)}
          handleInputChange={this.handleInputChange}
          getBoozeSuggestions={this.getBoozeSuggestions}
          autosuggest={this.state.autosuggest}
        />

      </div>
    );
  }
}

export default App;
