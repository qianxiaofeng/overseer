import './App.css';
import React from "react";
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import Events from "./event/Events"
import Event1 from "./event/Event1"
import Event2 from "./event/Event2"
import Event3 from "./event/Event3"
import Event4 from "./event/Event4"
import {Announces, announceDataList} from "./announce/Announces"
import Announce from "./announce/Announce"
import Donate from "./donate/Donate"
import DonateLedger from "./donate/DonateLedger"
import Broadcast from "./tool/Broadcast";
import Mail from "./tool/Mail";
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
                    <Route path="/event"
                           render={(renderProps) => (
                               <>
                                   <Route path={`${renderProps.match.url}/`} component={Events} exact/>
                                   <Route path={`${renderProps.match.url}/1`}
                                          render={()=><Event1 {...renderProps} eventId={"1"}/>}/>
                                   <Route path={`${renderProps.match.url}/2`}
                                          render={()=><Event2 {...renderProps} eventId={"2"} />}/>
                                   <Route path={`${renderProps.match.url}/3`}
                                          render={()=><Event3 {...renderProps} eventId={"3"} />}/>
                                   <Route path={`${renderProps.match.url}/4`}
                                          render={()=><Event4 {...renderProps} eventId={"4"} />}/>
                               </>
                           )}
                    />
                    <Route path="/broadcast">
                        <Broadcast/>
                    </Route>
                    <Route path="/donate">
                        <Donate/>
                    </Route>
                    <Route path="/donate_ledger">
                        <DonateLedger/>
                    </Route>
                    <Route path="/mail">
                        <Mail/>
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
