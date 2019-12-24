import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';


import RecordItem from './SideList/RecordItem';

import { Context } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    record: {
        overflow: 'auto',
        maxHeight: 960,
    }
  })
);


export default function SideList() {
    const classes = useStyles();
    const { records,  loading } = useContext(Context);
    
    return (
        <Paper className={classes.paper}>
            {
                loading ? 
                <CircularProgress />
                :
                <List className={classes.record} component="nav" aria-label="secondary mailbox folders">
                {
                    records.map((record, i) => <RecordItem key={i} record={record}/>)
                }   
                </List>
            }  
        </Paper>

    )
}