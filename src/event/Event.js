import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const useStyles = makeStyles((theme) => ({
    slider: {
        height: 1900,
        width: "100%",
        paddingTop: 10,
    },
    description: {
        paddingLeft: "10%",
        paddingRight: "10%",
    }
}));

const Level120 = () => {
    const classes = useStyles();
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className={classes.slider}>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src='/photos/pre9_trans/1.jpg'/>
                <div data-src='/photos/pre9_trans/2.jpg'/>
                <div data-src='/photos/pre9_trans/3.jpg'/>
                <div data-src='/photos/pre9_trans/4.jpg'/>
                <div data-src='/photos/pre9_trans/5.jpg'/>
                <div data-src='/photos/pre9_trans/6.jpg'/>
            </AutoplaySlider>
        </div>
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
                <p>
                    截止时间到11月30号。12月1-9号评选，12月10号公布并颁发奖励。
                    <h3>一等奖一人，奖金10万G</h3>
                    <h3>二等奖两人，奖励6万G</h3>
                    <h3>三等奖三人，奖励三万G</h3>
                    <h3>鼓励奖五人，奖励一万金（仅限新手参与 提供成就证明）</h3>
                    <p>特别感谢公会高阶“神韵地煞”对活动的大力赞助！同时还要感谢“梧桐术”“真的是新手”“園长”“统一曲马多”“叫我圆圆吧”对公会的捐助！爱你们！</p>
                </p>
            </div>
            <h1>参赛作品</h1>
            <Level120/>
            {/*<Footer/>*/}
        </>
    )
}

export default Gallery;
