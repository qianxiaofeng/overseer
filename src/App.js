import './App.css';
import React from "react";
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import Event from "./event/Event"
import Event2 from "./event/Event2"
import Roller from "./tool/Roller"
import Broadcast from "./tool/Broadcast"
import {Announces, announceDataList} from "./announce/Announces"
import Announce from "./announce/Announce"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>
                    <Route path="/event">
                        <Event/>
                    </Route>
                    <Route path="/event2">
                        <Event2/>
                    </Route>
                    <Route path="/roller">
                        <Roller/>
                    </Route>
                    <Route path="/broadcast">
                        <Broadcast/>
                    </Route>
                    <Route path="/announce"
                        render={(renderProps) => (
                        <>
                            <Route path={`${renderProps.match.url}/`} component={Announces} exact/>
                            <Route path={`${renderProps.match.url}/:announceId`}
                                   render={()=><Announce {...renderProps} announceDataList={announceDataList}/>}/>
                        </>
                    )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
