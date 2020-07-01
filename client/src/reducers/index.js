import { combineReducers } from 'redux';

import authReducer from './authReducer';
import messagesReducer from './messages';

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer
});