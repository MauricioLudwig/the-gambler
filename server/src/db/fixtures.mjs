import { v4 as uuidv4 } from 'uuid';

const gamesCategory = Object.freeze({
  KAFKA: Symbol('Kafka games'),
  DOSTOEVSKY: Symbol('Dostoevsky games')
});

const mockGames = [{
  name: 'The Brothers Karamazov',
  category: gamesCategory.DOSTOEVSKY.description
}, {
  name: 'The Gambler',
  category: gamesCategory.DOSTOEVSKY.description
}, {
  name: 'Crime and Punishment',
  category: gamesCategory.DOSTOEVSKY.description
}, {
  name: 'White Nights',
  category: gamesCategory.DOSTOEVSKY.description
}, {
  name: 'The Castle',
  category: gamesCategory.KAFKA.description
}, {
  name: 'The Trial',
  category: gamesCategory.KAFKA.description
}, {
  name: 'A Hunger Artist',
  category: gamesCategory.KAFKA.description
}, {
  name: 'The Metamorphosis',
  category: gamesCategory.KAFKA.description
}];

mockGames.forEach(o => {
  o.id = uuidv4();
});

const mockUser1 = {
  id: '123',
  name: 'Mikhail Bulgakov',
  email: 'bulgakov@gmail.com',
  password: 'master',
  level: 1,
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
  }],
  token: []
};

const mockUser2 = {
  id: '456',
  name: 'David Gemmell',
  email: 'david.gemmell@gmail.com',
  password: 'druss',
  level: 1,
  messages: [{
    text: 'Message from administrator',
    read: false
  }, {
    text: 'Drenai',
    read: false
  }, {
    text: 'A cynic by experience, a romantic by inclination and now a hero by necessity.',
    read: true
  }],
  token: []
}

mockUser1.messages.forEach(o => {
  o.id = uuidv4();
  o.date = new Date();
});

mockUser2.messages.forEach(o => {
  o.id = uuidv4();
  o.date = new Date();
});

export { mockUser1, mockUser2, mockGames };