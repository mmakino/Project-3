import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';

const NavbarComponent = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs align='right'>
                        <Typography variant="title" color="inherit" className='Typography'>
                            LIQUID ASSETS
                        </Typography>
                    </Grid>

                    <Grid item xs align='right'>
                        <Button color="inherit" href="/login">
                            Log In
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default NavbarComponent