// mock games table

import { mockGames } from './fixtures.mjs';

class GamesTable {
  constructor(games) {
    this.games = Array.from(games);
  }

  showGame(gameId) {
    const game = this.games.find(o => o.id === gameId);
    game.visible = true;
    return game;
  }

  hideGame(gameId) {
    const game = this.games.find(o => o.id === gameId);
    game.visible = false;
    return game;
  }

  get activeGames() {
    return this.games.filter(o => o.visible);
  }

  debug() {
    console.log('games', this.games);
  }
}

const gamesTable = new GamesTable(mockGames);

export { gamesTable };