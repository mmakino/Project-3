import React, { Fragment } from "react"
import FormComponent from "./FormComponent"
import TableComponent from "./TableComponent"
import ImageComponent from "./ImageComponent"
import { CSVLink } from "react-csv"
import { Grid } from "@material-ui/core"

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

                <Grid item xs align='right'>

                    <CSVLink
                        data={props.userInventoryData}
                        filename={"my-inventory.csv"}
                        className="btn btn-primary"
                        target="_blank"
                        style={{ marginRight: 65}}
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

