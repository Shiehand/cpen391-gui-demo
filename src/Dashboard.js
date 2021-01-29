import React from 'react'

import { Grid, makeStyles, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        backgroundColor: "#cccccc",
        textAlign: 'center',
    },
    chart: {
        margin: theme.spacing(2),
        height: '250px',
    },
}))

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Link to='/animal'>Elephant</Link>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Paper className={classes.chart}>
                                    Chart 
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.chart}>
                                    Other data
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Link to='/animal'>Tiger</Link>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Paper className={classes.chart}>
                                    Chart 
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.chart}>
                                    Other data
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
   )
}
