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
    },
    screenshot: {
        margin: 5
    }
}));

const BroadcastCard = () => {
    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <CardHeader
                // avatar={
                //
                //
                // }
                title={
                    <Chip
                        avatar={<Avatar aria-label="recipe" className={classes.avatar} src={"images/class/class_mage.jpg"}/>}
                        label="神韵地煞"
                        variant={"outlined"}
                    />
                }
                // subheader="斗鱼直播 https://www.douyu.com/9358539"
            />
            <a href={"https://www.douyu.com/9358539"} target="_blank" rel="noopener noreferrer">
                <CardActionArea>
                    <CardMedia
                        className={classes.screenshot}
                        component="img"
                        alt="Contemplative Reptile"
                        height="auto"
                        image="photos/broadcast/1.jpg"
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </a>
        </Card>

    )
}

function Broadcast() {

    return (
        <>
            <Header/>
            <h1>直播列表</h1>
            <BroadcastCard/>
            <Footer/>
        </>
    )
}

export default Broadcast;
