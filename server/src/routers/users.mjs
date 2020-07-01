import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/index.mjs';
import auth from '../middleware/auth.mjs';

const router = new express.Router();

router.get('/users/me', auth, (req, res) => {
  try {
    const { user: id } = req;
    const user = db.getUser(id);
    res.status(200).send(user);
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

router.post('/users/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const user = db.validateUser(email, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    db.saveToken(user.id, token);
    db.debug();
    res.send({ email: user.email, token });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

router.post('/users/logout', auth, (req, res) => {
  try {
    const { user: { id }, token } = req;
    db.removeToken(id, token);
    db.debug();
    res.send();
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});

export default router;