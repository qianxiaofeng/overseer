import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const useStyles = makeStyles((theme) => ({
    root:{
    },
    carousel: {
        height: "auto",
        width: "100%",
    },
}));


const Level120Gallery = () => {
    // const classes = useStyles();
    const images = [];
    for (let i = 1; i <= 10; i++) {
        images.push(
            {
                original: '/photos/group/original/group.'+i+'.jpg',
                thumbnail: '/photos/group/thumbnail/group.'+i+'.jpg',
            }
        )
    }
    return (
        <ImageGallery
            items={images}
            lazyLoad={false}
            thumbnailPosition={"bottom"}
            autoPlay={false}
            showIndex={true}
            infinite={false}
        />
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
