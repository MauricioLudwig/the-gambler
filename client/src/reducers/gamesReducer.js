import { gamesActionTypes } from '../actions/games';

const gamesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case gamesActionTypes.GET_GAMES_SUCCESS:
      return [...state, ...payload];
    case gamesActionTypes.ADD_GAME:
      return [...state, payload];
    default:
      return state;
  }
};

export default gamesReducer;