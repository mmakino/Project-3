import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const RunningTotal = props => {
    return (
        <Paper className='running-total' elevation={1}>
            <Typography variant="h5" component="h3">
                Current Inventory Value: ${props.runningTotal}
            </Typography>
            <Typography component="p">
                multiply this number by your markup for retail value.
            </Typography>
        </Paper>
    )
}

export default RunningTotal;

