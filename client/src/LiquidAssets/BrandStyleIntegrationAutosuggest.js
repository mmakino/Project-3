import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

// ****************************************************************************************THIS IS ONLY NECESSARY BEFORE WE CUSTOMIZED THIS FOR OUR AXIOS REQUEST TO DYNAMICALLY RENDER IT, HOWEVER THE FORMAT BELOW IS HOW YOUR DATA MUST LOOK  ****************************************************************************************
// let suggestions = [
//     { label: 'Afghanistan' },
//     { label: 'Aland Islands' },
//     { label: 'Albania' },
//     { label: 'Algeria' },
//     { label: 'American Samoa' },
//     { label: 'Andorra' },
//     { label: 'Angola' },
//     { label: 'Anguilla' },
//     { label: 'Antarctica' },
//     { label: 'Antigua and Barbuda' },
//     { label: 'Argentina' },
//     { label: 'Armenia' },
//     { label: 'Aruba' },
//     { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     { label: 'Bahamas' },
//     { label: 'Bahrain' },
//     { label: 'Bangladesh' },
//     { label: 'Barbados' },
//     { label: 'Belarus' },
//     { label: 'Belgium' },
//     { label: 'Belize' },
//     { label: 'Benin' },
//     { label: 'Bermuda' },
//     { label: 'Bhutan' },
//     { label: 'Bolivia, Plurinational State of' },
//     { label: 'Bonaire, Sint Eustatius and Saba' },
//     { label: 'Bosnia and Herzegovina' },
//     { label: 'Botswana' },
//     { label: 'Bouvet Island' },
//     { label: 'Brazil' },
//     { label: 'British Indian Ocean Territory' },
//     { label: 'Brunei Darussalam' },
// ];

function renderInputComponent(inputProps) {
    const { classes, inputRef = () => { }, ref, ...other } = inputProps;

    return (
        <TextField
            id='standard-name'
            label='Please enter the Brand Of Booze'
            variant='outlined'
            className={classes.textField}
            fullWidth
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) =>
                    part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 500 }}>
                            {part.text}
                        </span>
                    ) : (
                            <strong key={String(index)} style={{ fontWeight: 300 }}>
                                {part.text}
                            </strong>
                        ),
                )}
            </div>
        </MenuItem>
    );
}

// THIS IS WHERE THIS FUNCTION WHICH IS NOW INSIDE THE CLASS BELOW ORIGINALLY WAS!*****************************************************************************
// function getSuggestions(value) {
//     const inputValue = deburr(value.trim()).toLowerCase();
//     const inputLength = inputValue.length;
//     let count = 0;

//     return inputLength === 0
//         ? []
//         : suggestions.filter(suggestion => {
//             const keep =
//                 count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

//             if (keep) {
//                 count += 1;
//             }

//             return keep;
//         });
// }

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

const styles = theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

class BrandStyleIntegrationAutosuggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            single: '',
            popper: '',
            // we added this part, this suggestions array is where our data from the axios call gets pushed.  There was already a suggestions array but we modified our in order to conform to the code we had already written.
            autosuggest: {
                suggestions: []
            }

        };
    }

    // componentDidMount is where we 
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

    getSuggestions(value) {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        return inputLength === 0
            ? []
            // WE HAD TO MODIFY THIS BECUASE WE MOVED THIS PROPERTY INSIDE THIS CLASS.  IT WAS OUTSIDE THIS CLASS BEFORE
            : this.state.autosuggest.suggestions.filter(suggestion => {
                const keep =
                    count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

                if (keep) {
                    count += 1;
                }

                return keep;
            });
    }

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value),
        });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue,
        });
    };

    render() {
        const { classes } = this.props;

        const autosuggestProps = {
            renderInputComponent,
            // ALSO HERE WE HAD TO UPDATE FROM suggestions: 'this.suggestion' to what we wrote below ...
            suggestions: this.state.autosuggest.suggestions,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            getSuggestionValue,
            renderSuggestion,
        };

        return (
            <div className={classes.root}>
                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                        classes,
                        placeholder: 'Search a country (start with a)',
                        value: this.state.single,
                        onChange: this.handleChange('single'),
                    }}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={options => (
                        <Paper {...options.containerProps} square>
                            {options.children}
                        </Paper>
                    )}
                />
                <div className={classes.divider} />
                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                        classes,
                        label: 'Label',
                        placeholder: 'With Popper',
                        value: this.state.popper,
                        onChange: this.handleChange('popper'),
                        inputRef: node => {
                            this.popperNode = node;
                        },
                        InputLabelProps: {
                            shrink: true,
                        },
                    }}
                    theme={{
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderSuggestionsContainer={options => (
                        <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
                            <Paper
                                square
                                {...options.containerProps}
                                style={{ width: this.popperNode ? this.popperNode.clientWidth : null }}
                            >
                                {options.children}
                            </Paper>
                        </Popper>
                    )}
                />
            </div>
        );
    }
}

BrandStyleIntegrationAutosuggest.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandStyleIntegrationAutosuggest);