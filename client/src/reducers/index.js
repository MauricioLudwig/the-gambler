import { combineReducers } from 'redux';

import authReducer from './authReducer';
import gamesReducer from './gamesReducer';
import messagesReducer from './messages';

export default combineReducers({
  auth: authReducer,
  games: gamesReducer,
  messages: messagesReducer
});