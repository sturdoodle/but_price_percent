import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      {/* <Route path="/rdl/:pageid" component={Timb12}></Route>
      <Route exact path="/:pageid" component={Tbzone}></Route>
      <Route exact path="/:pageid/:subpageid" component={Tbzone}></Route>
      <Route path="/:pageid/:subpageid" component={Tbzone}></Route> */}
      <Route exact path="/" component={App}></Route>
    </Switch>
  </Router>
);