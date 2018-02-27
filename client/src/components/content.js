import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Success from './success';
import Signup from './auth/signup';
import Welcome from './welcome';
import RequireAuth from '../components/auth/require_auth';

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/signin" component={Signin} />
      <Route path="/success" component={RequireAuth(Success)} />
      <Route path="/signout" component={Signout} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </div>
);

export default Content;
