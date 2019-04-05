import React, { Fragment } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import ImageComponent from "./ImageComponent";
import { Grid } from '@material-ui/core';
import { CSVLink } from "react-csv";
import RunningTotal from './RunningTotal';
// import BrandStyleIntegrationAutosuggest from "./BrandStyleIntegrationAutosuggest";

let headers = [
    { label: 'Alcohol Type', key: 'type' },
    { label: 'Brand/Style', key: 'brandStyle' },
    { label: 'Size mL', key: 'sizeML' },
    { label: 'Oz per Bottle', key: 'sizeOZ' },
    { label: 'Cost per Bottle', key: 'costPerBottle' },
    { label: 'Oz Left in Open Bottle', key: 'ozRemaining' },
    { label: '% Left in Open Bottle', key: 'percentBottleRemaining' },
    { label: 'Cost per Oz', key: 'costPerOZ' },
    { label: 'Open Bottle Value', key: 'currentValueOfBottle' },
    { label: 'Total Bottles in Inventory', key: 'totalBottles' },
    { label: 'Total Value in Stock', key: 'totalInventoryValue' },
    { label: 'Date', key: 'createdAt' },
]

export default props => {
    return (
        <Fragment>
            <Grid container>

                <Grid item xs>

                    <FormComponent
                        // getBoozeSuggestions={props.getBoozeSuggestions}
                        // autosuggest={props.autosuggest}
                        formInputs={props.formInputs}
                        handleInputChange={props.handleInputChange}
                        postToInventory={props.postToInventory}
                        getUserInventory={props.getUserInventory}
                        postThenGet={props.postThenGet}
                        formInputErrors={props.formInputErrors}
                    />

                </Grid>

                <Grid item xs>

                    <ImageComponent
                        formInputs={props.formInputs}
                        handleInputChange={props.handleInputChange}
                        image={props.image}
                        tastingNotes={props.tastingNotes}
                    />

                </Grid>

            </Grid>

            <Grid container>

                <Grid item xs>

                    <TableComponent
                        userInventoryData={props.userInventoryData}
                    />

                </Grid>

            </Grid>

            <Grid container>

                <Grid item xs align="left">

                    <RunningTotal 
                    runningTotal={props.runningTotal} />

                </Grid>

                <Grid item xs align='right'>

                    <CSVLink
                        data={props.userInventoryData}
                        elevation={5}
                        headers={headers}
                        filename={"my-inventory.csv"}
                        className="btn btn-primary"
                        target="_blank"
                        style={{ marginRight: 75, boxShadow: '20px 10px 20px'  }}
                        onClick={() => {
                            console.log("You click the link"); // 👍🏻 Your click handling logic
                        }}
                    >
                        Download Inventory
                    </CSVLink>
                </Grid>
            </Grid>
            {/* <IntegrationAutosuggest
                getBoozeSuggestions={props.getBoozeSuggestions}
                autosuggest={props.autosuggest}
            /> */}
        </Fragment>
    )
}

