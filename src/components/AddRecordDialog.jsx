import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({});

export default function AddRecordDialog() {
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Dialog  fullWidth maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">写入你敬爱的带佬金句</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="name"
                    label="带佬金句"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                提交
            </Button>
            <Button onClick={handleClose} color="primary">
                取消
            </Button>
            </DialogActions>
      </Dialog>
    )
}