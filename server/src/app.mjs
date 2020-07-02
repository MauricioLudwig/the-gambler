// modules
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import jwt from 'jsonwebtoken';
import path from 'path';
import chalk from 'chalk';

// DB + routes
import { db } from './db/index.mjs';
import './db/games-table.mjs';
import usersRouter from './routers/users.mjs';
import gamesRouter from './routers/games.mjs';
import messagesRouter from './routers/messages.mjs';

// general config
dotenv.config();

const __dirname = path.resolve();
const publicPath = path.join(__dirname, 'public');

const app = express();
app.use(express.static(publicPath));
app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(gamesRouter);
app.use(messagesRouter);

const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

// admin page
app.get('', (req, res) => {
  res.sendFile('index.html');
});

// simple debug logger
const log = text => console.log(chalk.magenta(text));

io.on('connection', (socket) => {
  const { token } = socket.handshake.query;

  if (token) {
    log(`new user connected (client): ${socket.id}.`);

    const { id: userId } = jwt.verify(token, process.env.JWT_SECRET);
    db.storeSocketId(userId, socket.id);
    const { name } = db.getUser(userId);

    io.to('admin').emit('user-connected', { userId, name });
  } else {
    log(`new user connected (admin): ${socket.id}.`);
    socket.join('admin'); // pretend admin entry since admin page lacks authentication feature
  }

  socket.on('disconnect', () => {
    log(`user disconnected: ${socket.id}.`);

    try {
      const user = db.removeSocketId(socket.id);

      if (user) {
        io.to('admin').emit('user-disconnected', { userId: user.id });
      }
    } catch (e) {
      log(`no user found with matching socket id: ${socket.id}.`);
    }
  });

  socket.on('send-message', (data) => {
    const { userId, message } = data;
    const [socketId, newMessage] = db.addMessage(userId, message);

    io.to(socketId).emit('new-message', newMessage);
    log(`new message sent for user ${userId}.`);
  });

  socket.on('raise-level', () => {
    db.raiseUserLevels();
    io.sockets.emit('level-raised');
    log(`level raised for all clients.`);
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});