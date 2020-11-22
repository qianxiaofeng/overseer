import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import WorldMap from "../home/WorldMap";



const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

function Globe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <WorldMap width={window.innerWidth} isFlat={false} isFull={true}/>
            <Footer/>
        </div>
    )
}

export default Globe;
