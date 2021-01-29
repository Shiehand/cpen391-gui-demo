import { AppBar, Badge, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import BellIcon from '@material-ui/icons/Notifications'
import ProfileIcon from '@material-ui/icons/AccountCircle'
import React from 'react';

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
}))

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit'><MenuIcon /></IconButton>
                    <Typography className={classes.title} variant='h6'>Animal Tracker</Typography>
                    <IconButton className={classes.bell} color='inherit'>
                        <Badge badgeContent={1} color='secondary'>
                            <BellIcon />
                        </Badge>
                    </IconButton>
                    <IconButton className={classes.profile} color='inherit'><ProfileIcon /></IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
