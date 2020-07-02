export const messagesActionTypes = {
  GET_MESSAGES_REQUEST: 'GET_MESSAGES_REQUEST',
  GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
  GET_MESSAGES_FAILURE: 'GET_MESSAGES_FAILURE',

  ADD_MESSAGE: 'ADD_MESSAGE',
};

export const getMessagesRequest = () => ({
  type: messagesActionTypes.GET_MESSAGES_REQUEST
});

export const getMessagesSuccess = data => ({
  type: messagesActionTypes.GET_MESSAGES_SUCCESS,
  payload: data
});

export const getMessagesFailure = error => ({
  type: messagesActionTypes.GET_MESSAGES_FAILURE,
  payload: error
});

export const addMessage = data => ({
  type: messagesActionTypes.ADD_MESSAGE,
  payload: data
});