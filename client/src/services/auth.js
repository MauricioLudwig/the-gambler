import axios from 'axios';
import * as actions from '../actions/auth';

export const login = (email, password) => (dispatch) => {
  dispatch(actions.loginRequest());

  return axios.post('http://localhost:3000/users/login', { email, password })
    .then(({ response }) => {
      dispatch(actions.loginSuccess(response.data));
    }).catch((error) => {
      dispatch(actions.loginFailure(error));
    });
};