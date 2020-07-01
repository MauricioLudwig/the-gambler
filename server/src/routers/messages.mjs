import express from 'express';
import { db } from '../db/index.mjs';
import auth from '../middleware/auth.mjs';

const router = new express.Router();

router.get('/messages', auth, (req, res) => {
  try {
    const { id } = req.user;
    const messages = db.getMessagesByUserId(id);

    res.send(messages);
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
})

export default router;