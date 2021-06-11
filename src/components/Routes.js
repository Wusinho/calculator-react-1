import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import App from './App';
import Quote from './Quote';

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
    <footer>
      <span>
        lol
      </span>
    </footer>
  </Router>
);

export default Routes;
