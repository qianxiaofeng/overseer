import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#4E2A1F",
        height: "auto",
    },
    nav:{
        color: "#a05344",
        paddingLeft:25,
        textDecoration: 'none',
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
                <Link to="/" className={classes.nav}><Typography variant="h6" >主页</Typography> </Link>
                <Link to="/announce" className={classes.nav}><Typography variant="h6">公告</Typography> </Link>
                <Link to="/event" className={classes.nav}><Typography variant="h6">幻化大赛</Typography> </Link>
                <Link to="/event2" className={classes.nav}><Typography variant="h6" >竞速升级</Typography> </Link>
                <Link to="/roller" className={classes.nav}><Typography variant="h6" >Roller</Typography> </Link>
                <Link to="/gallery" className={classes.nav}><Typography variant="h6" >相册</Typography> </Link>
            </Toolbar>
        </AppBar>
    )
}

