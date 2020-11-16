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
        background: "#4E2A1F",
        height: "auto",
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
                <Link to="/event"><Typography variant="h6" className={classes.nav}>幻化大赛</Typography> </Link>
                <Link to="/event2"><Typography variant="h6" className={classes.nav}>竞速升级</Typography> </Link>
                <Link to="/roller"><Typography variant="h6" className={classes.nav}>Roller</Typography> </Link>
                <Link to="/gallery"><Typography variant="h6" className={classes.nav}>相册</Typography> </Link>
            </Toolbar>
        </AppBar>
    )
}

