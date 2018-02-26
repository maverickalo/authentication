import axios from 'axios';
import history from '../utils/historyUtils';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/success');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
