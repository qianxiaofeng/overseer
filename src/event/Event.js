import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
    // const classes = useStyles();
    const images = [];
    for (let i = 1; i <= 17; i++) {
        images.push(
            {
                original: '/photos/pre9_trans/original/'+i+'.jpg',
                thumbnail: '/photos/pre9_trans/thumbnail/'+i+'.jpg',
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
                    <p>特别感谢公会高阶<b>“神韵地煞”</b>对活动的大力赞助！</p>
                    <p>同时还要感谢<b>“梧桐术”“真的是新手”“园长”“统一、曲马多”“叫我圆圆吧”“战争督军”“韩公子、”“一念成佛、”“超幸运的锦鲤”“神韵地煞”“Reonana”“发芽了””火狐夜麟””Hydz””朋友的母亲二””彩虹猎杀”</b>对公会的捐助！爱你们！
                    </p>
                </div>
            </div>
            <h1>参赛作品</h1>
            <Pre9Trans/>
            <Footer/>
        </>
    )
}

export default Gallery;
