export const authActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'
};

export const loginRequest = () => ({
  type: authActionTypes.LOGIN_REQUEST
});

export const loginSuccess = data => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: data
});

export const loginFailure = error => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: error
});

export const logoutRequest = () => ({
  type: authActionTypes.LOGIN_REQUEST
});

export const logoutSuccess = data => ({
  type: authActionTypes.LOGOUT_SUCCESS,
  payload: data
});

export const logoutFailure = error => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: error
});