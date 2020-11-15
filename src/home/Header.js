import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        background: "#4E2A1F",
        height: "auto",
    },
    title: {
        flexGrow: 1,
    },
    nav:{
        color: "#a05344",
        paddingLeft:25,
    }
}));


export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="end"  color="inherit">
                    <Link to="/"><HomeIcon style={{color:"white"}} /></Link>
                </IconButton>
                <Link to="/"><Typography variant="h6" className={classes.nav}>主页</Typography> </Link>
                <Link to="/event"><Typography variant="h6" className={classes.nav}>活动</Typography> </Link>
                <Link to="/gallery"><Typography variant="h6" className={classes.nav}>相册</Typography> </Link>
            </Toolbar>
        </AppBar>
    )
}

