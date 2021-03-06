import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from '../home'
import Sort from '../Sorting/Sort'

const PageNotFound = () => <h1>Page Not Available</h1>;

const Routes = (props) => {
    return (
        <div>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route exact path="/sorting" component={Sort} /> */}
                <Route exact path="/" component={Sort} />
                <Route component={PageNotFound} status={404} />
            </Switch>
        </div>
    );
};
export default Routes;
