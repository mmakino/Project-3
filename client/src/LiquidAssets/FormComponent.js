import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, TextField, Grid, Paper, Button} from '@material-ui/core';
import deburr from 'lodash/deburr';
import BrandStyleIntegrationAutosuggest
  from './BrandStyleIntegrationAutosuggest';

import getBoozeSuggestions from './autosuggest/queryBooze';
import {
  renderInputComponent,
  renderSuggestion,
  getSuggestionValue,
} from './autosuggest/renderProps';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const nateStyles = {
  paper: {
    padding: 40,
    marginTop: 30,
    marginRight: 62,
  },
  gridContainer: {
    marginTop: 20,
    marginLeft: 40,
    padding: 20,
  },
};

// const FormComponent = props => {
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        formInputs: {
            brandStyle: ``,
            bottleSize: -1,
            unopenedBottles: -1,
            bottleCost: -1,
            bottleWeight: -1,
        },
        // we added this part, this suggestions array is where our data from the axios call gets pushed.  There was already a suggestions array but we modified our in order to conform to the code we had already written.
        suggestions: [],
      };  
  }

  initSuggestions() {
    getBoozeSuggestions()
      .then(gottenBoozeSuggestions => {
        this.setState({
          suggestions: gottenBoozeSuggestions
        });
      })
      .catch(err => console.log(err));
  }

  // componentDidMount is where we
  componentDidMount() {
    this.initSuggestions();
  }

  getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : // WE HAD TO MODIFY THIS BECUASE WE MOVED THIS PROPERTY INSIDE THIS CLASS.  IT WAS OUTSIDE THIS CLASS BEFORE
        this.state.suggestions.filter(suggestion => {
          const keep =
            count < 5 &&
            suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    if (this.state.suggestions.length === 0) {
      this.initSuggestions();
    }
    this.setState({
      [name]: newValue
    });
  };

  render() {
    const autosuggestProps = {
      renderInputComponent,
      // ALSO HERE WE HAD TO UPDATE FROM suggestions: 'this.suggestion' to what we wrote below ...
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <Grid container style={nateStyles.gridContainer}>
        <Grid item xs>
          <Paper style={nateStyles.paper}>
            <form
              className={"form-container"}
              noValidate
              // Not sure how this works.
              autoComplete="off"
            >
              {/* THIS IS HOW WE ACCOMPLISHED AUTOCOMPLETE */}
              <BrandStyleIntegrationAutosuggest
                id="brandStyle"
                label="Input the brand of booze you be weighin' and it's vintage or style here playa!"
                placeholder="Pappy Van Winkle 15 yr"
                // value={this.state.brandStyle}
                name="brandStyle"
                value={this.state.formInputs}
                onChange={() => this.handleChange('brandStyle')}
                autosuggestProps={autosuggestProps}
              />

              <BrandStyleIntegrationAutosuggest
                id="bottleSize"
                label="What size bottle is this?  750mL 1000mL or some weird ass size?"
                placeholder="750 ml"
                helperText="we'll let you know exactly how many ounces of booze you got in that there bottle."
                name="bottleSize"
                value={this.state.formInputs}
                onChange={() => this.handleChange('bottleSize')}
                autosuggestProps={autosuggestProps}
              />

              <TextField
                id="outlined-full-width"
                label="How many extra bottles of this you got stashed away? Not including this opened bottle"
                style={{ margin: 5 }}
                placeholder="12"
                helperText="this helps us calculate the total dollar value in your possesion for this product"
                fullWidth
                margin="normal"
                variant="outlined"
                name="unopenedBottles"
                value={this.props.formInputs.unopenedBottles}
                onChange={this.props.handleInputChange}
                InputLabelProps={{
                  shrink: true
                }}
              />

              <TextField
                id="outlined-full-width"
                label="How much does this sauce cost you per bottle?"
                style={{ margin: 5 }}
                placeholder="17.00"
                helperText="We will tell you your cost per ounce!"
                fullWidth
                margin="normal"
                variant="outlined"
                name="bottleCost"
                value={this.props.formInputs.bottleCost}
                onChange={this.props.handleInputChange}
                InputLabelProps={{
                  shrink: true
                }}
              />

              <TextField
                id="outlined-full-width"
                label="Throw it up on the scale and type in what it weighs, in gramz pleeze."
                style={{ margin: 5 }}
                placeholder="1432g"
                helperText="So much better than eyeball estimation.  When you go to the bank, and ask for your balance do you want the banker to be like: 'You got somewhere between like 10 and 15 thousand dollars you know give or take'.  Yeah, didn't think so... that's hella inaccurate."
                fullWidth
                margin="normal"
                variant="outlined"
                name="bottleWeight"
                value={this.props.formInputs.bottleWeight}
                onChange={this.props.handleInputChange}
                InputLabelProps={{
                  shrink: true
                }}
              />

              <Grid item align="right" style={{ marginTop: 20 }}>
                <Button
                  variant="contained"
                  className="button"
                  onClick={this.props.getUserInventory}
                >
                  Send To Inventory
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (FormComponent);
