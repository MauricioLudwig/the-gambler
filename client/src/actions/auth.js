export const authActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',

  GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE: 'GET_PROFILE_FAILURE',

  RAISE_LEVEL: 'RAISE_LEVEL',
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
  type: authActionTypes.LOGOUT_REQUEST
});

export const logoutSuccess = data => ({
  type: authActionTypes.LOGOUT_SUCCESS,
  payload: data
});

export const logoutFailure = error => ({
  type: authActionTypes.LOGOUT_FAILURE,
  payload: error
});

export const getProfileRequest = () => ({
  type: authActionTypes.GET_PROFILE_REQUEST
});

export const getProfileSuccess = data => ({
  type: authActionTypes.GET_PROFILE_SUCCESS,
  payload: data
});

export const getProfileFailure = error => ({
  type: authActionTypes.GET_PROFILE_FAILURE,
  payload: error
});

export const raiseLevel = () => ({
  type: authActionTypes.RAISE_LEVEL
});