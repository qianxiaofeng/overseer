import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from '@material-ui/core/Container';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const Rules = () => {
    const images = [];
    //for f in *.pic.jpg ; do printf '%s,'  "\"${f%.pic.jpg}\"" ; done;
    const filenames=["68991615181672_","69001615181674_","69011615181676_","69031615181678_","69041615181679_","69051615181681_","69061615181683_"]
    const filenames2 = ["5761615684535_","5771615684537_","5791615684539_","5801615684541_","5811615684542_","5831615684544_","5841615684545_","5851615684548_","68991615181672_","69001615181674_","69011615181676_","69031615181678_","69041615181679_","69051615181681_","69061615181683_","73201615703883_","73211615703895_","5861615684550_"]
    const resultFiles = filenames2.filter(a => !filenames.includes(a))
    for (let i = 0; i < filenames.length; i++) {
        images.push(
            {
                original: '/photos/event_pvp/' + filenames[i] + '.pic.jpg',
                thumbnail: '/photos/event_pvp/' + filenames[i] + '.pic_thumb.jpg',
            }
        )
    }
    for (let i = 0; i < resultFiles.length; i++) {
        images.push(
            {
                original: '/photos/event_pvp/' + resultFiles[resultFiles.length-i-1] + '.pic.jpg',
                thumbnail: '/photos/event_pvp/' + resultFiles[resultFiles.length-i-1] + '.pic_thumb.jpg',
            }
        )
    }
    return (
        <ImageGallery
            items={images}
            lazyLoad={false}
            thumbnailPosition={"top"}
            autoPlay={false}
            showIndex={true}
            infinite={false}
        />
    );
}

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
## 大家千呼万唤（并没有）的 PVP 大赛终于要开始了！经活动策划群亚美欧三地管理掰着脚趾头算时差研究了一晚上，终于确定在三月13号晚上23:00举行。

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
            <h1>细水第一届暨二月二抬头节PK插旗大赛</h1>
            <h1>冠军 眼镜起雾</h1>
            <img width={"100%"} src={"/photos/event_pvp/first.jpg"} alt={"winner"}/>
            <Container maxWidth="md">
                <ReactMarkdown plugins={[gfm]} className={classes.content}>{content}</ReactMarkdown>
            </Container>
            <h1>规则详情见下方图片</h1>
            <Rules/>
            <Footer/>
        </>
    )
}

export default Gallery;
