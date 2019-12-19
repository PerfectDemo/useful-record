import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    const { records, setSelectedRecord } = useContext(Context);
    
    return (
        <Paper className={classes.paper}>
            {
                <List className={classes.record} component="nav" aria-label="secondary mailbox folders">
                {
                    records.map((record, i) => (
                        <ListItem key={i} divider button onClick={() => setSelectedRecord(record)}>
                            <ListItemText primary={record.content} />
                        </ListItem>      
                    ))
                }   
                </List>
            }
          
        </Paper>

    )
}