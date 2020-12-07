import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Container from '@material-ui/core/Container';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {useParams} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f1f6f9",
        color: "#14274e",
    },
    content: {
        textAlign: "left",
    },
    signature: {
        textAlign: "right"
    }
}));


function Announce(props) {
    const classes = useStyles();
    let {announceId} = useParams();
    console.log(props)
    const announceData = props.announceDataList.find((a) => a.id === announceId);
    return (
        <div className={classes.root}>
            <Header/>
            <Container maxWidth="lg">
                <ReactMarkdown plugins={[gfm]} className={classes.content}>{announceData.content}</ReactMarkdown>
                <ReactMarkdown plugins={[gfm]} className={classes.signature}>{announceData.signature}</ReactMarkdown>
            </Container>
            <Footer/>
        </div>
    )
}

export default Announce;
