import React from "react";
import { Route, Switch } from "react-router-dom";
import Test from './test'
import Home from './home'

const PageNotFound = () => <h1>Page Not Available</h1>;

const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/test" component={Test} />
                <Route component={PageNotFound} status={404} />
            </Switch>
        </div>
    );
};
export default Routes;
