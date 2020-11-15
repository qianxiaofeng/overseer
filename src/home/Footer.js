import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '30px',
        width: '100%',
        backgroundColor: '#f4f4f2',
        color: '#bbbfca',
        opacity: 0.75,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant="h8" className={classes.title}>
                ©2020 细水长流一世安
            </Typography>
        </div>
    );
}