import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

import { Context } from '../../context';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },

    listItem: {
        display: 'flex',
        flexDirection: 'row',
        '& #operator': {
            display: 'none',
          
        }, 
        
        '&:hover': {
            '& #operator': {
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute',
                left: '80%'
            }
        }
    }
  })
);
export default function RecordItem(props) {
    const classes = useStyles();
    const { key, record } = props;
    const [ edit, setEdit ] = useState(false);
    const [ editRecord, setEditRecord ] = useState(record.content);

    const { deleteRecord, setSelectedRecord, setRecordId, updateRecord } = useContext(Context);

    return (
        <ListItem className={classes.listItem} key={key} divider button onClick={() => {
            setSelectedRecord(record);
            setRecordId(record._id);
        }}>
            { edit ?  <TextField id="standard-basic" onChange={e => setEditRecord(e.target.value)} value={editRecord}/> : <ListItemText primary={record.content} /> }
            <div id="operator">
                { edit ? 
                     <React.Fragment>
                        <IconButton aria-label="delete" size="small"
                            onClick={e => {
                                setEdit(false);
                                updateRecord(record._id, { content: editRecord })
                                e.stopPropagation();
                            }}>
                            <DoneIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" 
                            onClick={e => {
                                setEdit(false);
                                e.stopPropagation();
                            }}
                            >
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <IconButton aria-label="delete" size="small"
                            onClick={e => {
                                setEdit(true);
                                e.stopPropagation();
                            }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" size="small" onClick={(e) => {
                            deleteRecord(record._id);
                            e.stopPropagation();
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </React.Fragment>
                }
            </div>
        </ListItem>
    )
}