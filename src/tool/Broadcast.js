import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: "#9ba4b4",
        height: "auto",
        marginBottom:10,
    },
    screenshot: {
        margin: 5
    }
}));

const BroadcastCardList = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    // avatar={
                    //
                    //
                    // }
                    title={
                        <Chip
                            avatar={<Avatar aria-label="recipe" className={classes.avatar} src={"images/class/class_hunter.jpg"}/>}
                            label="璟航"
                            variant={"outlined"}
                        />
                    }
                />
                <a href={"https://www.douyu.com/9581331"} target="_blank" rel="noopener noreferrer">
                    <CardActionArea>
                        <CardMedia
                            className={classes.screenshot}
                            component="img"
                            alt="Contemplative Reptile"
                            height="auto"
                            image="photos/broadcast/3.png"
                            title="细水长流一世安直播"
                        />
                    </CardActionArea>
                </a>
            </Card>
        </div>

    )
}

function Broadcast() {

    return (
        <>
            <Header/>
            <h1>直播列表</h1>
            <BroadcastCardList/>
            <Footer/>
        </>
    )
}

export default Broadcast;
