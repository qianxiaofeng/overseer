import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function MenuTop() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="end" className={classes.menuButton} color="inherit">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Hello World
                    </Typography>
                    <Button variant="contained" color="primary">介绍</Button>
                    <Button variant="contained" color="primary">招募</Button>
                    <Button variant="contained" color="primary">工具</Button>
                    <Button variant="contained" color="primary">联系</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

