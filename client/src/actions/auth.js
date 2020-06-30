import ExportTypography from "antd/lib/typography/Typography";

export const authActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
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