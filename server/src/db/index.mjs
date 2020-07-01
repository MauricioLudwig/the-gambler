// mock db

import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

class DB {
  constructor(...initialUsers) {
    const newUsers = initialUsers.map(({ id, email, password, messages }) => ({
      id,
      email,
      password: bcrypt.hashSync(password, 10),
      level: 1,
      messages: messages.map(({ text, read }) => ({
        id: uuidv4(),
        text,
        read,
        date: new Date()
      })),
      token: []
    }));

    this.users = [...newUsers];
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

  debug() {
    console.log(this.users);
  }
}

const mockUser1 = {
  id: '123',
  email: 'bulgakov@gmail.com',
  password: 'master',
  messages: [{
    text: 'Level raised',
    read: false
  }, {
    text: 'Behemoth',
    read: true
  }, {
    text: 'Message from administrator',
    read: false
  }, {
    text: 'Message from administrator',
    read: false
  }, {
    text: 'Level raised',
    read: true
  }, {
    text: 'Margarita',
    read: false
  }]
};

const db = new DB(mockUser1);

export { db };