import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles((theme) => ({
    root:{
    },
    slider: {
        height: "auto",
        width: "100%",
        paddingTop:10,
    },
}));

const Level120 = () => {
    const classes = useStyles();
    return (
        <div className={classes.slider}>
            <h1>120级留念</h1>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src='/photos/lvl120/lvl120.1.jpg'/>
                <div data-src='/photos/lvl120/lvl120.2.jpg'/>
                <div data-src='/photos/lvl120/lvl120.3.jpg'/>
                <div data-src='/photos/lvl120/lvl120.4.jpg'/>
                <div data-src='/photos/lvl120/lvl120.5.jpg'/>
                <div data-src='/photos/lvl120/lvl120.6.jpg'/>
            </AutoplaySlider>
        </div>
    );
}


function Gallery() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <Level120/>
            {/*<Footer/>*/}
        </div>
    )
}

export default Gallery;
