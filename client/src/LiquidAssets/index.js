import React, { Fragment } from "react"
import FormComponent from "./FormComponent"
import TableComponent from "./TableComponent"
import ImageComponent from "./ImageComponent"
import { Grid } from '@material-ui/core'

export default props => {
    return (
        <Fragment>
            <Grid container>

                <Grid item xs>
                    <FormComponent
                        formInputs={props.formInputs}
                        handleInputChange={props.handleInputChange}
                        postToInventory={props.postToInventory}
                        getUserInventory={props.getUserInventory}
                        postThenGet={props.postThenGet}

                    />
                </Grid>

                <Grid item xs>
                    <ImageComponent />
                </Grid>

            </Grid>

            <Grid container>

                <Grid item xs>
                    <TableComponent
                        userInventoryData={props.userInventoryData}
                    />
                </Grid>

            </Grid>
        </Fragment>

    )

}

