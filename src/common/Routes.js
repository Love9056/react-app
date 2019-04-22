import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-browser-router";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    

                </Switch>
            </Router>
        )
    }
}
