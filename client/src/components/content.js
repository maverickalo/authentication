import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './auth/signin';
import Success from './success';

const Content = () => (
  <div>
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/success" component={Success} />
    </Switch>
  </div>
);

export default Content;
