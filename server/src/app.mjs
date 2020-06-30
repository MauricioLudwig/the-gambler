import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';

import { db } from './db/index.mjs';
import usersRouter from './routers/users.mjs';
import messagesRouter from './routers/messages.mjs';

const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(messagesRouter);
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('new client connected', socket.id);

  const { userId } = socket.handshake.query;
  db.storeSocketId(userId, socket.id);

  socket.on('new-message', (data) => {
    const { userId, message } = data;
    db.addMessage(userId, message);
    io.to(userId).emit(message);
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});