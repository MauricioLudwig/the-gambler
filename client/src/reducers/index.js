import { combineReducers } from 'redux';
import { authActionTypes as actions } from '../actions/auth';

import authReducer from './authReducer';
import gamesReducer from './gamesReducer';
import messagesReducer from './messages';

const appReducer = combineReducers({
  auth: authReducer,
  games: gamesReducer,
  messages: messagesReducer
});

const rootReducer = (state, action) => {
  if (action.type === actions.LOGOUT_SUCCESS) { // need to reset state whenever user logs out
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;