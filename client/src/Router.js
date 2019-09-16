import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';

import App from "./App"
import Charts from "./component/Charts"

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path='/app' component={App}/>
            <Route path='/charts' component={Charts} />
        </Switch>
    </HashRouter>
);

export default BasicRoute;