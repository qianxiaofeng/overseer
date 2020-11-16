import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "auto",
        width: "100%",
    },
    description: {
        paddingLeft: "10%",
        paddingRight: "10%",
    }
}));
const Pre9Trans = () => {
    const classes = useStyles();

    return (
        <Carousel
            className={classes.carousel}
            dynamicHeight={true}
            autoPlay={true}
            useKeyboardArrows={true}
            stopOnHover={true}
        >
            <div><img src={'/photos/pre9_trans/1.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/2.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/3.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/4.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/5.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/6.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/7.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/8.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/9.jpg'}/></div>
            <div><img src={'/photos/pre9_trans/10.jpg'}/></div>
        </Carousel>
    );
}

function Gallery() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <h1>9.0前夕幻化大赛</h1>
            <div className={classes.description}>
                <p>
                    为庆祝公会官网搭建，特举办幻化大赛和展示活动，请有兴趣的朋友拍自己最满意的一张幻化，微信小窗发图给会长，要求名字带上你最酷炫的头衔和显示公会名。
                </p>
                <div>
                    截止时间到11月30号。12月1-9号评选，12月10号公布并颁发奖励。
                    <h3>一等奖一人，奖金10万G</h3>
                    <h3>二等奖两人，奖励6万G</h3>
                    <h3>三等奖三人，奖励三万G</h3>
                    <h3>鼓励奖五人，奖励一万金（仅限新手参与 提供成就证明）</h3>
                    <p>特别感谢公会高阶“神韵地煞”对活动的大力赞助！同时还要感谢<b>“梧桐术”“真的是新手”“園长”“统一曲马多”“叫我圆圆吧”“战争督军”“韩公子、”</b>对公会的捐助！爱你们！</p>
                </div>
            </div>
            <h1>参赛作品</h1>
            <Pre9Trans/>
            <Footer/>
        </>
    )
}

export default Gallery;
