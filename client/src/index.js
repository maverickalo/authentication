import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { AUTH_USER } from './actions/types';
import history from './utils/historyUtils';
import reduxThunk from 'redux-thunk';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container')
);
