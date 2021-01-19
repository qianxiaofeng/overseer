import './App.css';
import React from "react";
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import Events from "./event/Events"
import Event1 from "./event/Event1"
import Event2 from "./event/Event2"
import Broadcast from "./tool/Broadcast"
import {Announces, announceDataList} from "./announce/Announces"
import Announce from "./announce/Announce"
import Donate from "./donate/Donate"
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
                               </>
                           )}
                    />
                    <Route path="/broadcast">
                        <Broadcast/>
                    </Route>
                    <Route path="/donate">
                        <Donate/>
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
