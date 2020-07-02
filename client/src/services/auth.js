import axios from 'axios';
import * as actions from '../actions/auth';

export const getProfile = () => (dispatch, getState) => {
  dispatch(actions.getProfileRequest());

  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`
    }
  }

  axios.get('http://localhost:3000/users/profile', config)
    .then((response) => {
      dispatch(actions.getProfileSuccess(response.data));
    }).catch((error) => {
      dispatch(actions.getProfileFailure(error));
    });
};

export const signIn = (email, password) => (dispatch) => {
  dispatch(actions.loginRequest());

  axios.post('http://localhost:3000/users/login', { email, password })
    .then((response) => {
      const { token } = response.data;
      dispatch(actions.loginSuccess({ token }));
    }).catch((error) => {
      dispatch(actions.loginFailure(error));
    });
};

export const signOut = () => (dispatch, getState) => {
  dispatch(actions.logoutRequest());

  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`
    }
  }

  axios.post('http://localhost:3000/users/logout', null, config)
    .then(() => {
      dispatch(actions.logoutSuccess());
    }).catch((error) => {
      dispatch(actions.logoutFailure(error));
    });
};