import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import 'rc-texty/assets/index.css';



const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#f1f6f9",
        // color: "#14274e",
    },
}));


const Ledger = () =>{
    //helper scripts run in public/photos/donate:  for f in *.pic_hd.jpg ; do printf '%s,'  "\"${f%.pic_hd.jpg}\"" ; done;
    const filenames = ["5001614444013_","5011614444038_","5021614444065_"];

    return(
        <div>
            <h1>捐款账目明细</h1>
            {
               filenames.map(f => {
                   return <img key={f} src={"photos/donate/"+f+".pic_hd.jpg"} alt={"donate ledger details"}/>;
               })

            }
        </div>
    )
}

function Donate() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Ledger/>
            <Footer/>
        </div>
    )
}

export default Donate;
