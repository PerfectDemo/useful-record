import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useRecord from '../hooks/use-record';


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


export default function SideList(props) {
    const classes = useStyles();

    const { records, loading, error } = useRecord();
    

    return (
        <Paper className={classes.paper}>
            {
                loading ? 
                <div>Loading...</div> : 
                (<List className={classes.record} component="nav" aria-label="secondary mailbox folders">
                {
                    records.map(record => (
                        <ListItem divider button>
                            <ListItemText primary={record.content} />
                        </ListItem>      
                    ))
                }   
                </List>)
            }
          
        </Paper>

    )
}