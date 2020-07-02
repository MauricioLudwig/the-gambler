import { authActionTypes } from '../actions/auth';

const initialState = {
  token: null,
  user: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...initialState
      }
    case authActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: { ...payload }
      }
    case authActionTypes.RAISE_LEVEL:
      return {
        ...state,
        user: {
          ...state.user,
          level: state.user.level + 1
        }
      }
    default:
      return state;
  }
};

export default authReducer;