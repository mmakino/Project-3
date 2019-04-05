import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField, Grid, Paper, Button } from '@material-ui/core';
import BrandStyleIntegrationAutosuggest
    from './BrandStyleIntegrationAutosuggest';
import BottleSizeIntegrationAutosuggest
    from './BottleSizeIntegrationAutosuggest';

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
        marginTop: 30
        // marginRight: 62,
    },
    gridContainer: {
        marginTop: 20,
        marginLeft: 40,
        padding: 20,
    },
};

const FormComponent = props => {
    return (
        <Grid container style={nateStyles.gridContainer}>
            <Grid item xs>
                <Paper style={nateStyles.paper}>

                    <form
                        className={'form-container'}
                        noValidate
                        // Not sure how this works.
                        autoComplete="off"
                    >
                        {/* THIS IS HOW WE ACCOMPLISHED AUTOCOMPLETE */}
                        <BrandStyleIntegrationAutosuggest
                            id="outlined-full-width"
                            label={"Booze Name"}
                            placeholder="Pappy Van Winkle 15 yr"
                            // style={{ margin: 5 }}
                            value={props.formInputs.brandstyle}
                            onChange={props.handleInputChange}
                            name="brandStyle"
                            autosuggest={props.autosuggest}
                            formInputErrors={props.formInputErrors.brandstyle}
                        />

                        <BottleSizeIntegrationAutosuggest
                            id="outlined-full-width"
                            label="Bottle Size in mL"
                            placeholder="750 ml"
                            // style={{ margin: 5 }}
                            helperText="we'll let you know exactly how many ounces of booze you got in that there bottle."
                            name="brandStyle"
                            value={props.formInputs.bottleSize}
                            onChange={props.handleInputChange}
                            autosuggest={props.autosuggest}
                            formInputErrors={props.formInputErrors.bottleSize}
                        />

                        <TextField
                            id="outlined-full-width"
                            label="Backstock"
                            style={{ margin: 5 }}
                            placeholder="12"
                            helperText=""
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="unopenedBottles"
                            value={props.formInputs.unopenedBottles}
                            onChange={props.handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="outlined-full-width"
                            label="Cost Per Bottle"
                            style={{ margin: 5 }}
                            placeholder="17.00"
                            helperText=""
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="bottleCost"
                            value={props.formInputs.bottleCost}
                            onChange={props.handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="outlined-full-width"
                            label="Product Weight In Grams"
                            style={{ margin: 5 }}
                            placeholder="1432"
                            helperText=""
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            name="bottleWeight"
                            value={props.formInputs.bottleWeight}
                            onChange={props.handleInputChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Grid item align="right" style={{ marginTop: 20 }}>
                            <Button
                                variant="contained"
                                className="button"
                                onClick={props.postThenGet}
                            >
                                Send To Inventory
                            </Button>
                        </Grid>
                        <div className="container ml-auto text-danger">
                            {props.formInputErrors.userId}
                            {props.formInputErrors.dataError}
                        </div>

                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};
FormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);
