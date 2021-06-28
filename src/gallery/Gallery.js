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
    const invite_img_names = ["101011624837436_","101021624837438_","101031624837439_","101041624837441_","101051624837443_","101061624837444_","101071624837446_","101081624837448_","101091624837449_","101101624837451_"];
    for (let i = 0; i < invite_img_names.length; i++) {
        images.push(
            {
                original: '/photos/9.1_invite/' + invite_img_names[i] + '.pic.jpg',
                thumbnail: '/photos/9.1_invite/' + invite_img_names[i] + '.pic_thumb.jpg',
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
