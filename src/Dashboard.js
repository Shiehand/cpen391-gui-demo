import React from 'react'

import { AppBar, Badge, Container, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import BellIcon from '@material-ui/icons/Notifications'
import ProfileIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    bell: {
        marginRight: theme.spacing(2),
    },
    profile: {
        marginRight: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
    },
    body: {
        
    },
}))

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit'><MenuIcon /></IconButton>
                    <Typography className={classes.title} variant='h6'>Dashboard</Typography>
                    <IconButton className={classes.bell} color='inherit'>
                        <Badge badgeContent={1} color='secondary'>
                            <BellIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.profile} color='inherit'><ProfileIcon /></IconButton>
                </Toolbar>
            </AppBar>

            <Grid container spacing={3}>

            </Grid>
        </div>
   )
}
