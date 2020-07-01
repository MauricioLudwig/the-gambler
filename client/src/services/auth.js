import axios from 'axios';
import * as actions from '../actions/auth';

export const signIn = (email, password) => (dispatch) => {
  dispatch(actions.loginRequest());

  return axios.post('http://localhost:3000/users/login', { email, password })
    .then((response) => {
      const { email, token } = response.data;
      dispatch(actions.loginSuccess({
        token,
        user: {
          email
        }
      }));
      return response.data;
    }).catch((error) => {
      dispatch(actions.loginFailure(error));
      throw error.Error;
    });
};

export const signOut = () => (dispatch, getState) => {
  dispatch(actions.logoutRequest());

  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`
    }
  }

  return axios.post('http://localhost:3000/users/logout', null, config)
    .then((response) => {
      return response.data;
    }).catch((error) => {
      dispatch(actions.logoutFailure(error));
      throw error;
    });
};