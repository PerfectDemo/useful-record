
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';


import { Context }  from '../../context';



const useStyles = makeStyles(theme => ({
    commentInput: {
        marginTop:  theme.spacing(2) 
    },
    author: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:  theme.spacing(2) 
    },
    avatar: {
       marginRight: theme.spacing(2)
    },
    card: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
  }));

export default function CommentInput() {
    const classes = useStyles();

    const [ name, setName ] = useState(localStorage.getItem('adc:name'));
    const [ avatar, setAvatar] = useState(localStorage.getItem('adc:avatar') || 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fpic.616pic.com%2Fys_img%2F00%2F06%2F27%2F5m1AgeRLf3.jpg&imgrefurl=http%3A%2F%2F616pic.com%2Ftupian%2Fmorentouxiang.html&docid=MdlwgnFHG_Uq6M&tbnid=-e4kVt2g8azwtM%3A&vet=10ahUKEwi5uvSl6MbmAhWIfXAKHTrFCPIQMwhGKAAwAA..i&w=260&h=280&bih=715&biw=1440&q=%E9%BB%98%E8%AE%A4%20%E5%A4%B4%E5%83%8F&ved=0ahUKEwi5uvSl6MbmAhWIfXAKHTrFCPIQMwhGKAAwAA&iact=mrc&uact=8');
    const [ content, setContent ] = useState('');
    const { addComment, recordId }  = useContext(Context);

    const saveUserInfo = () => {
        localStorage.setItem('adc:name', name);
        localStorage.setItem('adc:avatar', avatar);
    }

    const onSubmit = () => {
        const comment = {
            avatar, content, name
        };
        addComment(recordId, comment);
        saveUserInfo();
    }

    return (
        recordId ? 
        <Card className={classes.card}> 
            <div className={classes.author}>
                <Avatar className={classes.avatar} aria-label="recipe" src={avatar} />
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="name" label="你的名称" size="small" type="search" variant="outlined" />
            </div>
            <TextField onChange={(e) => setContent(e.target.value)} className={classes.commentInput} fullWidth id="outlined-search" label="输入你听到的大佬金句" type="search" variant="outlined" />
            <Button onClick={onSubmit} className={classes.commentInput} variant="contained" color="primary">
                提交评论
            </Button> 
        </Card>
        :
        ''
    )
}