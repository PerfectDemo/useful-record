import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



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
    },
    listItem: {
        '& #operator': {
            display: 'none'
        }, 
        
        '&:hover': {
            '& #operator': {
                display: 'inline-block'
            }
        }
    },

    operator: {
        position: 'absolute',
        left: '80%'
    }
  })
);


export default function SideList() {
    const classes = useStyles();
    const { records, setSelectedRecord, setRecordId, loading, deleteRecord } = useContext(Context);
    
    return (
        <Paper className={classes.paper}>
            {
                loading ? 
                <CircularProgress />
                :
                <List className={classes.record} component="nav" aria-label="secondary mailbox folders">
                {
                    records.map((record, i) => (
                        <ListItem className={classes.listItem} key={i} divider button onClick={() => {
                            setSelectedRecord(record);
                            setRecordId(record._id);
                        }}>
                            <ListItemText primary={record.content} />
                            <span id="operator" className={classes.operator}>
                                <IconButton disabled aria-label="delete" size="small"
                                    onClick={e => e.stopPropagation()}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" size="small" onClick={(e) => {
                                    deleteRecord(record._id);
                                    e.stopPropagation();
                                }}>
                                    <DeleteIcon />
                                </IconButton>
                            </span>
                        </ListItem>      
                    ))
                }   
                </List>
            }
          
        </Paper>

    )
}