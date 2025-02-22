import express from 'express';
import { gamesTable } from '../db/games-table.mjs';
import auth from '../middleware/auth.mjs';

const router = new express.Router();

router.get('/games', auth, (req, res) => {
  try {
    const games = gamesTable.allGames;
    res.send(games);
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

export default router;