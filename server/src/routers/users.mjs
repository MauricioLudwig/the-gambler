import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db/index.mjs';

const router = new express.Router();

router.post('/users/login', (req, res) => {
  try {
    const { email, password } = req.body;

    const user = db.validateUser(email, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.send({ email: user.email, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;