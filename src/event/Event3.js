import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from '@material-ui/core/Container';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import ImageGallery from "react-image-gallery";

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "auto",
        width: "100%",
    },
    description: {
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    result: {
        width: "50%",
        height: 800,
        marginLeft:"auto",
        marginRight:"auto",
    },
    content: {
        textAlign: "center",
    },
    signature: {
        textAlign: "right"
    }
}));

const content = `
# 9.0“正月里来正月正”春节第二届幻化大赛

### 为庆祝公会官网搭建，特举办幻化大赛和展示活动，请有兴趣的朋友拍自己最满意的一张幻化，微信小窗发图给会长，要求名字带上你最酷炫的头衔和显示公会名。

### 截止时间到2月28号。3月1-13号评选，3月14号抬头节公布结果并颁发奖励。

## 一等奖一人，奖金10万G

## 二等奖两人，奖励6万G

## 三等奖三人，奖励三万G

## 参与奖若干（其实是所有参与者都有），视参加人数随机发放鼓励金或者小礼品（其实就是看会长大人的心情好不好）。
`

const EventTrans2 = () => {
    // const classes = useStyles();
    const images = [];
    for (let i = 1; i <= 11; i++) {
        images.push(
            {
                original: '/photos/event_trans_2/original/' + i + '.jpg',
                thumbnail: '/photos/event_trans_2/thumbnail/' + i + '.jpg',
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
    const classes = useStyles();

    return (
        <>
            <Header/>
            <Container maxWidth="md">
                <ReactMarkdown plugins={[gfm]} className={classes.content}>{content}</ReactMarkdown>
            </Container>
            <h1>参赛作品</h1>
            <EventTrans2/>
            <Footer/>
        </>
    )
}

export default Gallery;
