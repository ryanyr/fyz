import React from 'react';
import {Router,Route,browserHistory,IndexRedirect,hashHistory,IndexRoute} from "react-router";
import Rou from "./routes/router";
import Home from "./routes/homeRouter";
import Login from "./routes/loginRouter";
export default React.createClass({
    render:function(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Rou}>
                    <IndexRedirect to="/home"/>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                </Route>
            </Router>
        )
    }
})