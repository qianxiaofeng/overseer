import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        width: '100%',
        backgroundColor: '#9ba4b4',
        color: '#394867',
        opacity: 0.5,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                ©2020 细水长流一世安
            </Typography>
        </div>
    );
}