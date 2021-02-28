import React,{useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import { WordCloud } from '@ant-design/charts';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import QueueAnim from "rc-queue-anim";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";



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
    {name:"超幸运的锦鲤", value:100000},
    {name:"叫我圆圆吧", value:100000},
    {name:"Reonana", value:150000},
    {name:"火狐夜麟", value:60000},
    {name:"Hydz", value:40000},
    {name:"朋友的母亲二", value:30000},
    {name:"彩虹猎杀", value:5000},
    {name:"最后的平民", value:66666},
    {name:"小柒姐", value:23333},
    {name:"Mars", value:180000},
    {name:"仙儿", value:100000},
    {name:"微笑的特蕾莎", value:23333},
    {name:"斩冬", value:350000},
    {name:"Gladitatroll", value:45000},
    {name:"巨蘑菇", value:23333},
    {name:"业之子", value:50000},
    {name:"今夜看海吗、", value:50000},
    {name:"安妮菲娅", value:66666},
    {name:"树色一团", value:528500},
    {name:"欧洲一团", value:250000},
    {name:"Susuu", value:66666},
    {name:"英俊的跳跳", value:20000},
    {name:"灰灰天", value:560000},
    {name:"Kygo", value:1000000},
    {name:"星驰游侠", value:500000},
    {name:"安妮菲娅", value:100000},
    {name:"虞兮兮", value:200000},
]

const DonateWordCloud = () => {
    const config = {
        data: data,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        "theme":{"styleSheet":{"brandColor":"#025DF4","paletteQualitative10":["#025DF4","#DB6BCF","#2498D1","#BBBDE6","#4045B2","#21A97A","#FF745A","#007E99","#FFA8A8","#2391FF"],"paletteQualitative20":["#025DF4","#DB6BCF","#2498D1","#BBBDE6","#4045B2","#21A97A","#FF745A","#007E99","#FFA8A8","#2391FF","#FFC328","#A0DC2C","#946DFF","#626681","#EB4185","#CD8150","#36BCCB","#327039","#803488","#83BC99"]}},
        // color:["#FF4500","#1AAF8B","#406C85","#F6BD16","#B40F0F","#2FB8FC","#4435FF","#FF5CA2","#BBE800","#FE8A26"],"paletteQualitative20":["#FF4500","#1AAF8B","#406C85","#F6BD16","#B40F0F","#2FB8FC","#4435FF","#FF5CA2","#BBE800","#FE8A26","#946DFF","#6C3E00","#6193FF","#FF988E","#36BCCB","#004988","#FFCF9D","#CCDC8A","#8D00A1","#1CC25E"],
        // color:["#025DF4","#DB6BCF","#2498D1","#BBBDE6","#4045B2","#21A97A","#FF745A","#007E99","#FFA8A8","#2391FF"],"paletteQualitative20":["#025DF4","#DB6BCF","#2498D1","#BBBDE6","#4045B2","#21A97A","#FF745A","#007E99","#FFA8A8","#2391FF","#FFC328","#A0DC2C","#946DFF","#626681","#EB4185","#CD8150","#36BCCB","#327039","#803488","#83BC99"],
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [
                12,
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
            <Link to="/donate_ledger" className={classes.nav} style={{textDecoration: "none", color:"blue"}}><Typography variant="h6">( 账目明细 )</Typography> </Link>
            <DonateWordCloud/>
            <Footer/>
        </div>
    )
}

export default Donate;
