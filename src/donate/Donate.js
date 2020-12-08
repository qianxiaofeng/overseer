import React,{useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import { WordCloud } from '@ant-design/charts';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import animType from 'rc-texty/lib/animTypes';
import QueueAnim from "rc-queue-anim";



const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#f1f6f9",
        // color: "#14274e",
    },
}));

const data = [
    {name:"梧桐术", value:120000},
    {name:"真的是新手", value:10000},
    {name:"园长", value:30000},
    {name:"统一、曲马多", value:70000},
    {name:"战争督军", value:93000},
    {name:"韩公子、", value:5000},
    {name:"神韵地煞", value:100000},
    {name:"超幸运的锦鲤", value:100000},
    {name:"叫我圆圆吧", value:100000},
    {name:"Reonana", value:150000},
    {name:"火狐夜麟", value:50000},
    {name:"Hydz", value:40000},
    {name:"朋友的母亲二", value:30000},
    {name:"彩虹猎杀", value:5000},
    {name:"最后的贫民", value:66666},
    {name:"小柒姐", value:23333},
    {name:"Mars", value:50000},
    {name:"仙儿", value:100000},
    {name:"微笑的特蕾莎", value:23333},
    {name:"斩冬", value:50000},
    {name:"Gladitatroll", value:45000},
    {name:"巨蘑菇", value:23333},
    {name:"欧洲团", value:50000},
    {name:"业之子", value:50000},
    {name:"厚德、载物", value:1000000},
    {name:"今夜看海吗、", value:50000},
    {name:"安妮菲娅", value:66666},
]

const DonateWordCloud = () => {
    const config = {
        data: data,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [
                8,
                32
            ],
            rotation: 0
        },
        random: function random() {
            return Math.random();
        }
    };

    return (

     <WordCloud {...config}/>

    )
}

const Thanks = () =>{
    const initShowIndex = Math.floor(Math.random()*data.length);
    console.log(initShowIndex)
    const [showIndex, setShowIndex] = useState(initShowIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowIndex(showIndex => (showIndex + 1)%data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, );

    return(
        <div>
            <h3>感谢</h3>
            <h1>
                <QueueAnim duration={0}>
                    {
                        data.map((d,i)=>(
                           showIndex===i && <Texty
                                key={i}
                                type={"scaleBig"}
                                mode={"smooth"}
                                duration={450}
                                interval={Math.floor(1000/d.name.length)}
                            >
                                {d.name}
                            </Texty>
                        ))
                    }
                </QueueAnim>
            </h1>
        </div>
    )
}

function Donate() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Thanks/>
            <DonateWordCloud/>
            <Footer/>
        </div>
    )
}

export default Donate;
