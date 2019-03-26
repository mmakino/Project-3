import React from "react"
import FormComponent from "./FormComponent"
import TableComponent from "./TableComponent"
import { Grid } from '@material-ui/core'

export default props => {
    return (
        <Grid container>

        <Grid item xs>
            <FormComponent />
        </Grid>

        <Grid item xs>
            <TableComponent />
        </Grid>

    </Grid>

    )

}

