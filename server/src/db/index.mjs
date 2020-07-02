// mock db (users + messages)

import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { mockUser1, mockUser2 } from './fixtures.mjs';

class DB {
  constructor(...initialUsers) {
    this.users = Array.from(initialUsers.map(o => ({
      ...o,
      password: bcrypt.hashSync(o.password, 10)
    })));
  }

  validateUser(email, password) {
    const user = this.users.find(o => o.email === email);

    if (!user) {
      throw new Error('No user found.');
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new Error('Email or password was incorrect.');
    }

    return user;
  }

  getMessagesByUserId(userId) {
    const { messages } = this.users.find(o => o.id === userId);
    return messages;
  }

  addMessage(userId, text) {
    const user = this.users.find(o => o.id === userId);

    if (!user) {
      throw new Error(`User with id ${userId} was not found.`);
    }

    const newMessage = {
      id: uuidv4(),
      text,
      read: false,
      date: new Date()
    };

    user.messages.push(newMessage);
    return [user.socketId, newMessage];
  }

  storeSocketId(userId, socketId) {
    const user = this.users.find(o => o.id === userId);

    if (!user) {
      throw new Error('Invalid user');
    }

    user.socketId = socketId;
  }

  removeSocketId(socketId) {
    const user = this.users.find(o => o.socketId === socketId);
    delete user.socketId;
    return user;
  }

  findUser(id, token) {
    return this.users.find(o => o.id === id && o.token.some(t => t === token));
  }

  saveToken(userId, token) {
    const user = this.users.find(o => o.id === userId);
    user.token.push(token);
  }

  removeToken(userId, token) {
    const user = this.users.find(o => o.id === userId);
    user.token = user.token.filter(o => o !== token);
  }

  getUser(userId) {
    const { id, password, messages, ...rest } = this.users.find(o => o.id === userId);
    return { ...rest };
  }

  raiseUserLevels() {
    this.users.forEach(user => {
      user.level = user.level + 1;
    });
  }

  debug() {
    console.log('users', this.users);
  }
}

const db = new DB(mockUser1, mockUser2);

export { db };