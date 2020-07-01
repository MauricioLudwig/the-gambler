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
  o.visible = true;
});

export { mockGames };