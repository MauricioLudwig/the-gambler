import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginContainer from '../pages/login/';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

const AppRouter = () => (
  <Router history={createBrowserHistory()}>
    <div>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;