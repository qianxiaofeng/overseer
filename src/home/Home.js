import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "./Header";
import Introduction from "./Introduction";
import Recruit from "./Recruit";
import Contact from "./Contact";
import DaylightMap from "./DaylightMap";
import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
    home: {
        height: '100%',
        backgroundImage: `url(images/wallpaper.1.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    },
}));

function Home() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <div className={classes.home}>
                <Introduction/>
            </div>
            <Recruit />

            <DaylightMap />

            <Contact/>
           <Footer/>
        </>
    )
}

export default Home;
