import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
const __dirname = path.resolve();

import cors from 'cors';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import jwt from 'jsonwebtoken';

import { db } from './db/index.mjs';
import usersRouter from './routers/users.mjs';
import messagesRouter from './routers/messages.mjs';

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log('publicpath', publicPath);
app.use(express.static(publicPath));
app.use(cors());
app.use(express.json());
app.use(usersRouter);
app.use(messagesRouter);
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000;

app.get('', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', (socket) => {
  console.log('new user connected', socket.id);
  const { token } = socket.handshake.query;
  console.log('token', token);

  if (token) {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    db.storeSocketId(id, socket.id);
  }

  socket.on('send-message', (data) => {
    const { userId, message } = data;
    const [socketId, newMessage] = db.addMessage(userId, message);
    io.to(socketId).emit('new-message', newMessage);
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});