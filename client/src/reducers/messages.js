import { messagesActionTypes } from '../actions/messages';

const messagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case messagesActionTypes.ADD_MESSAGE:
      return [...state, payload];
    case messagesActionTypes.GET_MESSAGES_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default messagesReducer;