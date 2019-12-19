import React, { useContext, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Context } from '../context';

export default function AddRecordDialog() {
    const { addRecordDialogVisible, setAddRecordDialogVisible, addRecord } = useContext(Context);
    const [ inputRecord, setInputRecord ] = useState(null);

    const handleClose = () => {
        setAddRecordDialogVisible(false);
    };

    const onChange = (event) => {
        setInputRecord({
            content: event.target.value
        });
    }

    const onSumbit = () => {
        addRecord(inputRecord);
        setAddRecordDialogVisible(false);
    }

    return (
        <Dialog fullWidth maxWidth="md" open={addRecordDialogVisible} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                    onChange={onChange}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={onSumbit} color="primary">
                提交
            </Button>
            <Button onClick={handleClose} color="primary">
                取消
            </Button>
            </DialogActions>
      </Dialog>
    )
}