export const gamesActionTypes = {
  GET_GAMES_REQUEST: 'GET_GAMES_REQUEST',
  GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
  GET_GAMES_FAILURE: 'GET_GAMES_FAILURE',

  ADD_GAME: 'ADD_GAME',
  REMOVE_GAME: 'REMOVE_GAME',
}

export const getGamesRequest = () => ({
  type: gamesActionTypes.GET_GAMES_REQUEST
});

export const getGamesSuccess = data => ({
  type: gamesActionTypes.GET_GAMES_SUCCESS,
  payload: data
});

export const getGamesFailure = error => ({
  type: gamesActionTypes.GET_GAMES_FAILURE,
  payload: error
});

export const addGame = data => ({
  type: gamesActionTypes.ADD_GAME,
  payload: data
});

export const removeGame = data => ({
  type: gamesActionTypes.REMOVE_GAME,
  payload: data
});