// mock db

import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

class DB {
  constructor(...initialUsers) {
    const newUsers = initialUsers.map(({ email, password, messages }) => ({
      id: uuidv4(),
      email,
      password: bcrypt.hashSync(password, 10),
      level: 1,
      messages: messages.map(o => ({
        id: uuidv4(),
        text: o,
        read: false,
        date: new Date()
      }))
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
}

const mockUser1 = {
  email: 'franz.kafka@gmail.com',
  password: 'The Castle',
  messages: [
    'x',
    'y',
    'z'
  ]
};

const mockUser2 = {
  email: 'Bulgakov',
  password: 'master',
  messages: [
    '1',
    '2',
    '3'
  ]
};

const db = new DB(mockUser1, mockUser2);

export { db };