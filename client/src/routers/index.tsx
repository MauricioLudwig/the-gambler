import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../middleware/axios-interceptor';

import AuthenticatedRoute from './authenticated-route';
import PublicRoute from './public-route';

import Login from '../pages/login/login-container';
import Home from '../pages/home/home-container';
import NotFound from '../pages/not-found';

const AppRouter = () => (
  <Router history={createBrowserHistory()}>
    <div>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <AuthenticatedRoute path="/" component={Home} exact />
        <AuthenticatedRoute component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;