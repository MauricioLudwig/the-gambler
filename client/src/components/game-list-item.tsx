import React from 'react';
import { Card, Button } from 'antd';
import { Game } from '../components/game-list/game-list';

const GameListItem = ({ name }: Game) => (
  <Card>
    <div className="game-list-item__card-content">
      <small>{name}</small>
      <Button type="primary">Play</Button>
    </div>
  </Card>
);

export default GameListItem;