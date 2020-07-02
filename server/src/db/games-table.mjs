// mock games table

import { mockGames } from './fixtures.mjs';
import { v4 as uuidv4 } from 'uuid';

class GamesTable {
  constructor(games) {
    this.games = Array.from(games);
  }

  addGame(name, category) {
    const newGame = {
      id: uuidv4(),
      category,
      name
    };

    this.games.push(newGame);
    return newGame;
  }

  get allGames() {
    return this.games;
  }

  debug() {
    console.log('games', this.games);
  }
}

const gamesTable = new GamesTable(mockGames);

export { gamesTable };