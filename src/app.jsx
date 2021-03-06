
import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Bar from './components/Bar';
import SideList from './components/SideList';
import AddRecordDialog from './components/AddRecordDialog';
import Detail from './components/Detail';


import { Context } from './context';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
  }));

export default function() {

    const classes = useStyles();
    const { isWide } = useContext(Context);
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Bar />
                </Grid>

                {
                    isWide ?
                    <> 
                        <Grid item xs={3}>
                            <SideList/>
                        </Grid>
                    
                        <Grid item xs={9}>
                            <Detail />
                        </Grid>
                    </>
                    :
                    <Grid item xs={12}>
                        <SideList/>
                    </Grid>
                }
              
            
            </Grid>
            <AddRecordDialog />
        </div>     
    )
}