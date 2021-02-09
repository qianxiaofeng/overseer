import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#f1f6f9",
        // color: "#14274e",
    },
    open: {
        paddingLeft:30,
        marginBottom: 10,
        textAlign: "left",
    },
    close: {
        paddingLeft:30,
        marginBottom: 10,
        textAlign: "left",
        backgroundColor: "grey",
        opacity: 0.8
    }
}));

const eventDataList = [
    {
        id: "1",
        title: "竞速升级 [已结束]",
        status: "close",
    },
    {
        id: "2",
        title: "幻化大赛 [已结束]",
        status: "close",
    },
    {
        id:"3",
        title:"9.0“正月里来正月正”春节第二届幻化大赛",
        status:"open"
    }
]

const EventCard = ({eventId, title, status}) => {
    const classes = useStyles();

    return (
        <Card className={status === "open" ? classes.open : classes.close}>
            <Link to={`/event/${eventId}`} style={{textDecoration: "none"}}>
                <CardActionArea>
                    <div>
                        {
                            <h1>{title} </h1>
                        }

                    </div>
                </CardActionArea>
            </Link>
        </Card>

    )
}

function Events() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Container maxWidth="lg">
                <h1>活动列表</h1>
                {
                    eventDataList.slice(0).reverse().map((a) => {
                        return (
                            <EventCard key={a.id} announceId={a.id} title={a.title} eventId={a.id} status={a.status}/>)
                    })
                }
            </Container>
            <Footer/>
        </div>
    )
}

export default Events;