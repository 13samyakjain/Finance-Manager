import React, {Suspense,lazy} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'

const Routes= lazy(()=>import('./Routes'));
require('dotenv').config({path: __dirname + '/.env'})


function App() {
  return (
    <div className="App">
    <Router>
          <div className="App">  
            <Switch>
            <Route exact path="/" component={Login} />
            <Suspense fallback={
             <div>
             <h1>Loading..</h1>
               {/* <Loader/> */}
             </div>
            }>
            <Route component={Routes} />
            </Suspense>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
