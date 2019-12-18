
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    commentInput: {
        marginTop:  theme.spacing(2) 
    }
  }));

export default function CommentInput() {
    const classes = useStyles();

    return (
        <div>
            <TextField className={classes.commentInput} fullWidth id="outlined-search" label="输入你听到的大佬金句" type="search" variant="outlined" />
            <Button className={classes.commentInput} variant="contained" color="primary">
                提交评论
            </Button> 
        </div>
    )
}