import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../context';

import { Paper, Grid, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import Avatar from '@material-ui/core/Avatar';

import { red } from '@material-ui/core/colors';

import CommentInput from './Detail/CommentInput';

const useStyles = makeStyles(theme => ({
    title: {
        padding: theme.spacing(3, 2)
    },
    avatar: {
        backgroundColor: red[500],
    },
    content: {
        padding: theme.spacing(3, 2),
        height: 150
    },

    commentTitle: {
        marginTop:  theme.spacing(2)
    }
  }));

export default function Detail() {
    const classes = useStyles();
    const { selectedRecord, comments, commentLoading } = useContext(Context);

    return (
        <Paper className={classes.title}>
            <div className={classes.content}>
                <Typography  variant="h3" component="h3">
                    {selectedRecord ? selectedRecord.content : ''}
                </Typography>
            </div>
            <Divider />
            <CommentInput />
            <Typography className={classes.commentTitle} component="h3">
                    评论
            </Typography>
            {
                commentLoading ? 
                <Card style={{ margin: '10px',  textAlign: 'center'}}>
                    <CircularProgress />
                </Card>
                :
                comments.map((comment, index) => (
                    <Card key={index} style={{ margin: '10px' }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" src={comment.avatar ? comment.avatar : '../static/images/avatar.jpeg'}>
                            </Avatar>
                            }
                            title={comment.name}
                            subheader={comment._createdOn}
                        />
                        <CardContent>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {comment.content}
                            </Typography>
                        </CardContent>
                     </Card>
                ))
            }
            
        </Paper>
    )
}