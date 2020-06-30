import { messagesActionTypes } from '../actions/messages';

const messagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case messagesActionTypes.GET_MESSAGES_SUCCESS:
      return [...state, ...payload];
    case messagesActionTypes.MESSAGE_RECEIVED:
      return [...state, payload];
    default:
      return state;
  }
};

export default messagesReducer;