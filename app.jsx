
import React, { useState } from 'react';

import { Paper, Grid, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import { red } from '@material-ui/core/colors';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
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
    },

    record: {
        overflow: 'auto',
        maxHeight: 960,
    },

    barCenter: {
       flexGrow: 1
    },

    commentInput: {
        marginTop:  theme.spacing(2) 
    }
  }));

function MyList(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
             <List className={classes.record} component="nav" aria-label="secondary mailbox folders">
                {
                    props.records.map(record => (
                        <ListItem divider button>
                            <ListItemText primary={record} />
                        </ListItem>      
                    ))
                }   
             </List>
        </Paper>

    )
}

function CommentInput() {
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



function Detail() {
    const classes = useStyles();

    return (
        <Paper className={classes.title}>
            <div className={classes.content}>
                <Typography  variant="h3" component="h3">
                    攻玉是个好同学
                </Typography>
                <Typography component="p">
                Paper can be used to build surface or other elements for your application.
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

function AddRecordDialog() {
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

function Bar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.barCenter} variant="h6" color="inherit">
                带佬语录
            </Typography>

            <Fab size="small" color="primary"  aria-label="add">
                <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    )
}


export default function() {
   
    const [ records, setRecords ] = useState([
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛',
        '此时此刻， 非你莫属',
        '那你提供一个解决方案嘛'
    ]);

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <div className={classes.root}>
                  
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Bar />
                        </Grid>
                        <Grid item xs={3}>
                            <MyList records={records}/>
                        </Grid>
                    
                        <Grid item xs={9}>
                            <Detail />
                        </Grid>
                    
                    </Grid>
                    <AddRecordDialog />
                </div>
            </Container>
        </React.Fragment>
    )
}