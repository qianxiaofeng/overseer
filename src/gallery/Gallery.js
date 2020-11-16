import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles((theme) => ({
    root:{
    },
    carousel: {
        height: "auto",
        width: "100%",
    },
}));

const Level120Gallery = () => {
    const classes = useStyles();

    return (
        <Carousel
            className={classes.carousel}
            dynamicHeight={true}
            autoPlay={true}
            useKeyboardArrows={true}
            stopOnHover={true}
        >
            <div><img src={'/photos/lvl120/lvl120.1.jpg'}/></div>
            <div><img src={'/photos/lvl120/lvl120.2.jpg'}/></div>
            <div><img src={'/photos/lvl120/lvl120.3.jpg'}/></div>
            <div><img src={'/photos/lvl120/lvl120.4.jpg'}/></div>
            <div><img src={'/photos/lvl120/lvl120.5.jpg'}/></div>
            <div><img src={'/photos/lvl120/lvl120.6.jpg'}/></div>
        </Carousel>
    );
}


function Gallery() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <Level120Gallery/>
            <Footer/>
        </div>
    )
}

export default Gallery;
