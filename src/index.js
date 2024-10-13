import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import V2Percent from './V2Percent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      {/* <Route path="/rdl/:pageid" component={Timb12}></Route>
      <Route exact path="/:pageid" component={Tbzone}></Route>
      <Route exact path="/:pageid/:subpageid" component={Tbzone}></Route>
      <Route path="/:pageid/:subpageid" component={Tbzone}></Route> */}
      <Route path="/:pageid/:subpageid" component={App}></Route>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/v2" component={V2Percent}></Route>
    </Switch>
  </Router>
);