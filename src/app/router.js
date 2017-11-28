import React from 'react';
import {Router,Route,hashHistory,IndexRedirect} from "react-router";
import Rou from "./routes/router";
import Home from "./routes//homeRouter";
export default React.createClass({
    render:function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Rou}>
                    <IndexRedirect to="home"/>
                    <Route path="home" component={Home} />
                </Route>
            </Router>
        )
    }
})