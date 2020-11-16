import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";


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
                <p>
                    活动时间为11月24日到11月26日。11月26日公布并颁发奖励。
                    <h3>第一名奖金3万G</h3>
                    <h3>第二名奖金2万G</h3>
                    <h3>第三名奖金1万G</h3>
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default Gallery;
