import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Users from "./components/users";

export default function routes() {
    return (
        <Switch>  
            <Route path="/users" component={Users} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
}
