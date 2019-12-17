
import React, { useState } from 'react';

import { Paper, Grid, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Bar from './components/Bar';
import SideList from './components/SideList';
import AddRecordDialog from './components/AddRecordDialog';
import Detail from './components/Detail';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    }
  }));



export default function() {

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <div className={classes.root}>
                  
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Bar />
                        </Grid>
                        <Grid item xs={3}>
                            <SideList/>
                        </Grid>
                    
                        <Grid item xs={9}>
                            <Detail />
                        </Grid>
                    
                    </Grid>
                    <AddRecordDialog />
                </div>
            </Container>
        </React.Fragment>
    )
}