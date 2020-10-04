import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login';
function Routes() {
    return (
        <div>
        {/* <ScrollalwaysTop> */}
        <Switch>
            <Route exact path="/home" component={LoginPage} />        
            {/* <Route exact path="/login" component={LoginPage} />         */}
            </Switch>
            {/* </ScrollalwaysTop> */}
        </div>
    )
}

export default Routes
