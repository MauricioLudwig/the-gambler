import axios from 'axios';
import * as actions from '../actions/games';

export const getGames = () => (dispatch, getState) => {
  dispatch(actions.getGamesRequest());

  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`
    }
  }

  axios.get('http://localhost:3000/games', config)
    .then((response) => {
      dispatch(actions.getGamesSuccess(response.data));
    }).catch((error) => {
      dispatch(actions.getGamesFailure(error));
    });
};