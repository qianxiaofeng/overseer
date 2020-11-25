import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    slider: {
        height: "auto",
        width: "100%",
        paddingTop: 10,
    },
    description: {
        paddingLeft: "10%",
        paddingRight: "10%",
    }
}));


function Gallery() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <h1>9.0急速满级赛</h1>
            <div className={classes.description}>
                <p>
                    迎接新版本，举办急速满级竞赛。
                </p>
                <div>
                    活动时间为11月24日开始，收到三张满级截图后结束。截图要求如以下示例，并发送到工会微信大群里。
                    <h3>第一名奖金10万G</h3>
                    <h3>第二名奖金6万G</h3>
                    <h3>第三名奖金3万G</h3>
                    <br/>
                    <h1>活动已结束</h1>
                    <p>祝贺细水长流一世安第一届急速满级竞赛圆满结束。祝贺我们的三位勇士成为细水最早满级的胜利者！在这个全新的世界里 你们不仅勇敢地完成了险象环生的任务，还顽强抵御了来自联盟和网络的干扰！你们是艾泽拉斯最伟大的英雄！小小奖励用以抚慰你们长达数小时的艰苦努力，并感谢你们为后来者树立了阳光、积极、勇往直前的榜样。愿后面的冒险旅程仍然一路顺利，祝游戏愉快！</p>

                    <h2>获奖名单</h2>
                    {
                        [1,2,3].map((i)=>(
                            <GridList cellHeight={450} className={classes.gridList} cols={2}>
                                <GridListTile  cols={1}>
                                    <img src={`photos/event_speed_levelup/screenshot${i}.jpg`} alt={""}/>
                                </GridListTile>
                                <GridListTile  cols={ 1}>
                                    <img src={`photos/event_speed_levelup/letter${i}.jpg`} alt={""}/>
                                </GridListTile>
                            </GridList>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Gallery;
