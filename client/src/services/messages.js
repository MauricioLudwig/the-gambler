import axios from 'axios';
import * as actions from '../actions/messages';

export const getMessages = () => (dispatch, getState) => {
  dispatch(actions.getMessagesRequest());

  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`
    }
  }

  axios.get('http://localhost:3000/messages', config)
    .then((response) => {
      dispatch(actions.getMessagesSuccess(response.data));
    }).catch((error) => {
      dispatch(actions.getMessagesFailure(error));
    });
};