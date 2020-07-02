import jwt from 'jsonwebtoken';
import { db } from '../db/index.mjs';

const auth = (req, res, next) => {
  try {
    const [, token] = req.header('Authorization').match(/Bearer (.+)/);
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = db.findUser(id, token);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (e) {
    res.status(401).send({ error: 'unauthorized request' });
  }
};

export default auth;