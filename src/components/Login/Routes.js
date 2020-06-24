import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import history from './History';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/RegisterPage" component={RegisterPage} />
                </Switch>
            </Router>
        )
    }
}