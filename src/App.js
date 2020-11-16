import './App.css';
import Button from '@material-ui/core/Button';
import React, {useState, useEffect} from "react";
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import Event from "./event/Event"
import Event2 from "./event/Event2"
import Roller from "./tool/Roller"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
        <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                    <Route path="/event">
                        <Event />
                    </Route>
                    <Route path="/event2">
                        <Event2 />
                    </Route>
                    <Route path="/roller">
                        <Roller />
                    </Route>
                </Switch>
        </div>
        </Router>
    );
}

export default App;
