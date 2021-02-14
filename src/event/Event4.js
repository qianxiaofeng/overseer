import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
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

const content = `
# 细水第一届暨二月二抬头节PK插旗大赛

## 大家千呼万唤（并没有）的插旗大赛终于要开始了！经活动策划群亚美欧三地管理掰着脚趾头算时差研究了一晚上，终于确定在三月13或14号（最终时间看报名表结果来确定）举行。地点在奥格大门口高调进行！

### 参加人数在10人及以下，实行个人1V1赛制，最终获胜者为总冠军；参加人数超过10人则分组两两对抗最终产生冠军。所有参赛人员均可参加抽奖环节，采用R点砸金蛋的方式随机获得金币、坐骑或小宠物等不同奖励。更有稀有宠物坐骑等你来领取哦！

## 个人总冠军奖金10万G

## 参与奖励随机人人有份

### 我们虽然是PVE向的公会，但重在参与，更为了展示（嘚瑟）我们公会的风采（顺便再收收人扬扬名）！（鉴于春节合影期间顺利收到新人一枚，此次活动希望能收到喜欢PVP的玩家，增加公会PVP的热情）整个比赛由会长斗鱼直播（不要刷礼物不要刷礼物非要刷礼物的麻烦换成金币捐公会银行呀！）、同时比赛结果会放在公会网站和NGA活动板块展示。

## 欢迎团队或个人对本次活动进行赞助，活动会对赞助者冠名宣传哦！（哈哈）
`

function Gallery() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <Container maxWidth="md">
                <ReactMarkdown plugins={[gfm]} className={classes.content}>{content}</ReactMarkdown>
            </Container>
            <Footer/>
        </>
    )
}

export default Gallery;
