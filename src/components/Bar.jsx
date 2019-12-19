import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { Context } from '../context';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    barCenter: {
       flexGrow: 1
    }
  })
);



export default function Bar() {
    const classes = useStyles();

    const { setAddRecordDialogVisible } = useContext(Context);

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

            <Fab size="small" color="primary"  aria-label="add" onClick={() => setAddRecordDialogVisible(true)}>
                <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    )
}