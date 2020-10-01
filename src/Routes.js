import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Landing from '../src/Component/LandingPage'
import LoginPage from '../src/Component/Login';
function Routes() {
    return (
        <div>
        {/* <ScrollalwaysTop> */}
        <Switch>
            <Route exact path="/home" component={Landing} />        
            <Route exact path="/login" component={LoginPage} />        
            </Switch>
            {/* </ScrollalwaysTop> */}
        </div>
    )
}

export default Routes
