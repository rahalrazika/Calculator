import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav';
import App from './App';
import Home from './home';
import Quotes from './quotes';

const Routes = () => (
  <Router>
    <div>
      <Nav />
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Calculator" exact component={App} />
      <Route path="/Quotes" exact component={Quotes} />
    </Switch>
  </Router>
);
export default Routes;
