import express from 'express';
import { db } from '../db/index.mjs';

const router = new express.Router();

router.get('messages/user/:id', (req, res) => {
  try {
    const { id } = req.params;
    const messages = db.getMessagesByUserId(id);
    res.send(messages);
  } catch (e) {
    res.status(400).send(e);
  }
})

export default router;