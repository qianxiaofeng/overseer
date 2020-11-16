import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Button from "@material-ui/core/Button";
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import { IconButton } from '@material-ui/core';
import {Wheel} from 'react-custom-roulette'


const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        width: "auto",
        // margin: "50, auto",
        // display: "flex",
        // paddingLeft:"50%",
        // paddingRight:"30%",
        display:"table",
        marginLeft:"auto",
        marginRight:"auto",
    },
    button:{
    },
}));

const specs = [
    {
        spec: "鲜血", class: "死亡骑士", backgroundColor: "#C41E3A",
        textColor: "white",
        icon: "images/spec/deathknight/blood.png"
    },
    {
        spec: "冰霜",
        class: "死亡骑士",
        backgroundColor: "#C41E3A",
        textColor: "white",
        icon: "images/spec/deathknight/frost.png"
    },
    {
        spec: "邪恶",
        class: "死亡骑士",
        backgroundColor: "#C41E3A",
        textColor: "white",
        icon: "images/spec/deathknight/unholy.png"
    },
    {
        spec: "浩劫",
        class: "恶魔猎手",
        backgroundColor: "#A330C9",
        textColor: "white",
        icon: "images/spec/demonhunter/havoc.jpg"
    },
    {
        spec: "复仇",
        class: "恶魔猎手",
        backgroundColor: "#A330C9",
        textColor: "white",
        icon: "images/spec/demonhunter/vengeance.jpg"
    },
    {spec: "平衡", class: "德鲁伊", backgroundColor: "#FF7C0A", textColor: "white", icon: "images/spec/druid/balance.png"},
    {spec: "野性", class: "德鲁伊", backgroundColor: "#FF7C0A", textColor: "white", icon: "images/spec/druid/feral.png"},
    {spec: "守护", class: "德鲁伊", backgroundColor: "#FF7C0A", textColor: "white", icon: "images/spec/druid/guardian.png"},
    {
        spec: "恢复",
        class: "德鲁伊",
        backgroundColor: "#FF7C0A",
        textColor: "white",
        icon: "images/spec/druid/restoration.png"
    },
    {
        spec: "野兽",
        class: "猎人",
        backgroundColor: "#AAD372",
        textColor: "black",
        icon: "images/spec/hunter/beastmastery.png"
    },
    {spec: "射击", class: "猎人", backgroundColor: "#AAD372", textColor: "black", icon: "images/spec/hunter/marksman.png"},
    {spec: "生存", class: "猎人", backgroundColor: "#AAD372", textColor: "black", icon: "images/spec/hunter/survival.png"},
    {spec: "奥术", class: "法师", backgroundColor: "#3FC7EB", textColor: "black", icon: "images/spec/mage/arcane.png"},
    {spec: "火焰", class: "法师", backgroundColor: "#3FC7EB", textColor: "black", icon: "images/spec/mage/fire.png"},
    {spec: "冰霜", class: "法师", backgroundColor: "#3FC7EB", textColor: "black", icon: "images/spec/mage/frost.png"},
    {spec: "酒仙", class: "武僧", backgroundColor: "#00FF98", textColor: "black", icon: "images/spec/monk/brewmaster.png"},
    {spec: "织雾", class: "武僧", backgroundColor: "#00FF98", textColor: "black", icon: "images/spec/monk/mistweaver.png"},
    {spec: "踏风", class: "武僧", backgroundColor: "#00FF98", textColor: "black", icon: "images/spec/monk/windwalker.png"},
    {spec: "神圣", class: "圣骑", backgroundColor: "#F48CBA", textColor: "black", icon: "images/spec/paladin/holy.png"},
    {
        spec: "防护",
        class: "圣骑",
        backgroundColor: "#F48CBA",
        textColor: "black",
        icon: "images/spec/paladin/protection.png"
    },
    {
        spec: "惩戒",
        class: "圣骑",
        backgroundColor: "#F48CBA",
        textColor: "black",
        icon: "images/spec/paladin/retribution.png"
    },
    {
        spec: "戒律",
        class: "牧师",
        backgroundColor: "#FFFFFF",
        textColor: "black",
        icon: "images/spec/priest/discipline.png"
    },
    {spec: "神圣", class: "牧师", backgroundColor: "#FFFFFF", textColor: "black", icon: "images/spec/priest/holy.png"},
    {spec: "暗影", class: "牧师", backgroundColor: "#FFFFFF", textColor: "black", icon: "images/spec/priest/shadow.png"},
    {
        spec: "奇袭",
        class: "盗贼",
        backgroundColor: "#FFF468",
        textColor: "black",
        icon: "images/spec/rogue/assassination.png"
    },
    {spec: "狂徒", class: "盗贼", backgroundColor: "#FFF468", textColor: "black", icon: "images/spec/rogue/combat.png"},
    {spec: "敏锐", class: "盗贼", backgroundColor: "#FFF468", textColor: "black", icon: "images/spec/rogue/subtlety.png"},
    {spec: "元素", class: "萨满", backgroundColor: "#0070DD", textColor: "black", icon: "images/spec/shaman/elemental.png"},
    {
        spec: "增强",
        class: "萨满",
        backgroundColor: "#0070DD",
        textColor: "black",
        icon: "images/spec/shaman/enhancement.png"
    },
    {
        spec: "恢复",
        class: "萨满",
        backgroundColor: "#0070DD",
        textColor: "black",
        icon: "images/spec/shaman/restoration.png"
    },
    {
        spec: "痛苦",
        class: "术士",
        backgroundColor: "#8788EE",
        textColor: "black",
        icon: "images/spec/warlock/affliction.png"
    },
    {
        spec: "恶魔",
        class: "术士",
        backgroundColor: "#8788EE",
        textColor: "black",
        icon: "images/spec/warlock/demonology.png"
    },
    {
        spec: "毁灭",
        class: "术士",
        backgroundColor: "#8788EE",
        textColor: "black",
        icon: "images/spec/warlock/destruction.png"
    },
    {spec: "武器", class: "战士", backgroundColor: "#C69B6D", textColor: "black", icon: "images/spec/warrior/arms.png"},
    {spec: "狂怒", class: "战士", backgroundColor: "#C69B6D", textColor: "black", icon: "images/spec/warrior/fury.png"},
    {
        spec: "防护",
        class: "战士",
        backgroundColor: "#C69B6D",
        textColor: "black",
        icon: "images/spec/warrior/protection.png"
    },
];

const data = specs.map(s => {
    return {option: s.class + " | " + s.spec, style: {textColor: s.textColor, backgroundColor: s.backgroundColor}};
})

const backgroundColors = ['#C41E3A'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 3;
const fontSize = 17;
const textDistance = 60;

const Roll = () => {
    const classes = useStyles();

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(-1);
    const [showResult, setShowResult] = useState(false);
    const [count, setCount] = useState(0);

    const handleSpinClick = () => {
        setMustSpin(true)
        setShowResult(false)
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        setPrizeNumber(newPrizeNumber)
    }

    return (

        <div className={classes.root}>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={backgroundColors}
                textColors={textColors}
                fontSize={fontSize}
                outerBorderColor={outerBorderColor}
                outerBorderWidth={outerBorderWidth}
                innerRadius={innerRadius}
                innerBorderColor={innerBorderColor}
                innerBorderWidth={innerBorderWidth}
                radiusLineColor={radiusLineColor}
                radiusLineWidth={radiusLineWidth}
                // perpendicularText
                textDistance={textDistance}

                onStopSpinning={(result) => {
                    setMustSpin(false);
                    setShowResult(true);
                    setCount(count+1)
                }}
            />
            <IconButton color="primary" className={classes.button} component="h1" disabled={mustSpin} onClick={handleSpinClick}>
                <LoopOutlinedIcon/> Roll
            </IconButton>
            <div> COUNT: {count} </div>
            {
                showResult ? (
                        <h1>
                            <img src={specs[prizeNumber].icon}/>
                            <br/>
                            {specs[prizeNumber].spec}
                            <br/>
                            {specs[prizeNumber].class}
                        </h1>
                    ) :
                    (
                        <></>
                    )
            }

        </div>
    );
}


function Roller() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <Roll/>
            <Footer/>
        </>
    )
}

export default Roller;
