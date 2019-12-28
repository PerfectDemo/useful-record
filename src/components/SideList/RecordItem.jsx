import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import MenuIcon from '@material-ui/icons/Menu';
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
    const [ operateEl, setOperateEl ] = useState(null);
    const [ editRecord, setEditRecord ] = useState(record.content);

    const { deleteRecord, setSelectedRecord, setRecordId, updateRecord, isWide } = useContext(Context);

    function handleEdit(e) {
        setEdit(true);
        e.stopPropagation();
    }

    function handleDelete(e) {
        deleteRecord(record._id);
        e.stopPropagation();
    }

    function getOperateButton() {
        if (isWide) {
            return (
                <div id="operator">
                    <IconButton aria-label="delete" size="small"
                        onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="small" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            )
        }
        return (
            <>
                <IconButton aria-label="delete" size="small" aria-controls="opeartor-menu" aria-haspopup="true"
                    onClick={e => {
                        setOperateEl(e.currentTarget);
                        e.stopPropagation();
                    }}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="opeartor-menu"
                    anchorEl={operateEl}
                    keepMounted
                    open={Boolean(operateEl)}
                    onClose={() => setOperateEl(null)}
                >
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
            </>
        );
    }

    return (
        <ListItem className={classes.listItem} key={key} divider button onClick={() => {
            setSelectedRecord(record);
            setRecordId(record._id);
        }}>
            { edit ?  <TextField fullWidth id="standard-basic" onChange={e => setEditRecord(e.target.value)} value={editRecord}/> : <ListItemText primary={record.content} /> }
            <>
                { edit ? 
                     <>
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
                    </>
                    :
                    getOperateButton()
                }
            </>
        </ListItem>
    )
}