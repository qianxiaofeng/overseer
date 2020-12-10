import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Container from '@material-ui/core/Container';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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
const Pre9Trans = () => {
    // const classes = useStyles();
    const images = [];
    for (let i = 1; i <= 15; i++) {
        images.push(
            {
                original: '/photos/pre9_trans/original/' + i + '.jpg',
                thumbnail: '/photos/pre9_trans/thumbnail/' + i + '.jpg',
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

const Result = () => {
    const classes = useStyles();
    const images = [];
    for (let i = 1; i <= 8; i++) {
        images.push(
            {
                original: '/photos/pre9_trans/result/' + i + '.jpg',
            }
        )
    }
    return (
        <div className={classes.result}>
            <ImageGallery
                items={images}
                lazyLoad={false}
                showThumbnails={false}
                // thumbnailPosition={"left"}
                autoPlay={false}
                showIndex={true}
                infinite={false}
            />
        </div>
    );
}

const content = `
# 幻化大赛奖励说明：

### 我们细水第一届幻化大赛已经结束啦，相信大家都早早看到了比赛结果。我们的名次都在投票小程序可以显示。

## 一等奖一名：统一曲马多 65票，获得奖励10万金。

## 二等奖两名：彩色黄昏40票、小柒爷27票，分别获得奖励6万金。

## 三等奖三名：火狐夜鳞，Marsjz，宙斯君喝咖灰，分别获得奖励3万金。（宙斯君请游戏内发邮件给我确认账号）

## 因为没有新号参与，我们的鼓励奖颁发给参与者阿庆的霸霸、半圣、HYDZ，每人获得奖励1万金。

## 特别奖励：积极参与活动的树色晚间一团集体获参与奖4万金。

### 2020.12.8于服务器崩溃中…
`

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
                </div>
            </div>
            <h1>活动已结束</h1>
            <Container maxWidth="sm">
                <ReactMarkdown plugins={[gfm]} className={classes.content}>{content}</ReactMarkdown>
            </Container>
            <Result/>
            <h1>参赛作品</h1>
            <Pre9Trans/>
            <Footer/>
        </>
    )
}

export default Gallery;
