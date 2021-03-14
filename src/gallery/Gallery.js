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
    const filenames = ["5761615684535_","5771615684537_","5791615684539_","5801615684541_","5811615684542_","5831615684544_","5841615684545_","5851615684548_","5861615684550_"]

    for (let i = 0; i < filenames.length; i++) {
        images.push(
            {
                original: '/photos/group/images/' + filenames[filenames.length-i-1] + '.pic.jpg',
                thumbnail: '/photos/group/images/' + filenames[filenames.length-i-1] + '.pic_thumb.jpg',
            }
        )
    }
    for (let i = 1; i <= 18; i++) {
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
