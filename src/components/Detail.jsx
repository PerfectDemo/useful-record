import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../context';

import { Paper, Grid, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
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
        height: 300
    },

    commentTitle: {
        marginTop:  theme.spacing(2)
    }
  }));

export default function Detail() {
    const classes = useStyles();
    const { selectedRecord } = useContext(Context);

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
                [0, 1, 2, 3, 4, 5, 6, 7].map(index => (
                    <Card key={index} style={{ margin: '10px' }}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body1" color="textSecondary" component="p">
                                有一说一， 确实
                            </Typography>
                        </CardContent>
                     </Card>
                ))
            }
            
        </Paper>
    )
}