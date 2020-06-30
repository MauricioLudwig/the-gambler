export const messagesActionTypes = {
  GET_MESSAGES_REQUEST: 'GET_MESSAGES_REQUEST',
  GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
  GET_MESSAGES_FAILURE: 'GET_MESSAGES_FAILURE',

  MESSAGE_RECEIVED: 'MESSAGE_RECEIVED'
};

export const getMessagesRequest = () => ({
  type: GET_MESSAGES_REQUEST
});

export const getMessagesSuccess = data => ({
  type: GET_MESSAGES_SUCCESS,
  payload: data
});

export const getMessagesFailure = error => ({
  type: GET_MESSAGES_FAILURE,
  payload: error
});

export const messageReceived = data => ({
  type: MESSAGE_RECEIVED,
  payload: data
});