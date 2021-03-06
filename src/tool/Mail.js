import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const Mails = () => {
    const images = [];
    //helper scripts run in photos/mail/images:  for f in *.pic_hd.jpg ; do printf '%s,'  "\"${f%.pic_hd.jpg}\"" ; done;
    const filenames=["4631614394084_","4641614394088_","4651614394091_","4661614394094_","4671614394098_","4681614394101_","4691614394103_","4721614394107_","4731614394110_","4741614394122_","4751614394125_","4761614394128_","4771614394131_","4781614394135_","4791614394138_","4801614394141_","4811614394144_","4821614394147_","4831614394204_","4841614394207_","4851614394211_","4861614394214_","4871614394217_","4881614394220_","4891614394223_","4901614394226_","5481615301396_","5491615301405_"]
    for (let i = 0; i < filenames.length; i++) {
        images.push(
            {
                original: '/photos/mail/images/' + filenames[filenames.length-i-1] + '.pic_hd.jpg',
                thumbnail: '/photos/mail/images/' + filenames[filenames.length-i-1] + '.pic_thumb.jpg',
            }
        )
    }
    return (
        <ImageGallery
            items={images}
            lazyLoad={false}
            thumbnailPosition={"left"}
            autoPlay={false}
            showIndex={true}
            infinite={false}
        />
    );
}

function Gallery() {
    return (
        <>
            <Header/>
            <h1>会长的石精信使</h1>
            <img src={"photos/mail/mailer.jpg"} alt={"mailer"}/>
            <Mails/>
            <Footer/>
        </>
    )
}

export default Gallery;
