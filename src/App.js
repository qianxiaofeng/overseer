import './App.css';
import Button from '@material-ui/core/Button';
import React, {useState, useEffect} from "react";
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const specs = [
    "鲜血","冰霜","邪恶",
    "浩劫","复仇",
    "平衡","野性","守护","恢复德",
    "野兽","射击","生存",
    "奥术","火焰","冰霜",
    "酒仙","织雾","踏风",
    "神圣","防骑","惩戒",
    "戒律","神圣","暗影",
    "奇袭","狂徒","敏锐",
    "元素","增强","恢复萨",
    "痛苦","恶魔","毁灭",
    "武器","狂怒","防战",

];

const Roller = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [rolling, setRolling] = useState(true);

    useEffect(() => {
        if (rolling) {
            const interval = setInterval(() => generateRandom(), 10);
            return () => {
                clearInterval(interval);
            };
        }
    }, [rolling]);

    const generateRandom = () => {
        const r = Math.floor(Math.random() * specs.length);
        setRandomNumber(r);
    };


    const handleButtonClicked = () => {
        setRolling(!rolling)
    };

    return (
        <div>
            <h1>{specs[randomNumber]}</h1>
            <Button
                variant={"contained"}
                color={"primary"}
                onClick={handleButtonClicked}
            >
                {rolling ? "stop" : "roll"}
            </Button>
        </div>
    )
};


function App() {
    return (
        <Router>
        <div className="App">
            {/*<Roller/>*/}
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                </Switch>
        </div>
        </Router>
    );
}

export default App;
