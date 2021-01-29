import { Button, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import location from './img/location.jpg'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    location: {
        height: '250px',
        margin: '0 auto',
        display: 'block',
    },
    title: {
       textAlign: 'center', 
       margin: theme.spacing(3),
       padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
    },
    gridItem: {
    }
}))

export default function Animal() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Paper className={classes.title}>Animal name</Paper>
            <Grid container justify='space-evenly'>
                <Grid className={classes.gridItem} item xs={5}>
                    <Paper className={classes.paper}>Heartbeat chart</Paper>
                    <Paper className={classes.paper}>Air quality</Paper>
                    <Paper className={classes.paper}>Proximity</Paper>
                    <Paper className={classes.paper}>Other sensors</Paper>
                    <Button variant='filled' color='secondary'>Track</Button>
                    <Button variant='filled' color='secondary'>Make Sound</Button>
                </Grid>
                <Grid item xs={5}>
                    <img className={classes.location} src={location} alt='location-tracking'></img>
                    <Alert severity="warning">Animal is outside of the allowed location</Alert>
                </Grid>
            </Grid>
            <Link to='/'>
                <Button>Back</Button>
            </Link>
        </div>
    )
}
