import jwt from 'jsonwebtoken';
import { db } from '../db/index.mjs';

const auth = (req, res, next) => {
  try {
    const [, token] = req.header('Authorization').match(/Bearer (.+)/);
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = db.findUser(id, token);

    console.log('TOKEN', token, id, user);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (e) {
    console.log('e', e);
    res.status(401).send({ error: 'unauthorized' });
  }
};

export default auth;