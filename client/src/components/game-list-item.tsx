import React from 'react';
import { Card, Button } from 'antd';

const GameListItem = ({ name }) => (
  <Card>
    <div className="game-list-item__card-content">
      <small>{name}</small>
      <Button type="primary">Play</Button>
    </div>
  </Card>
);

export default GameListItem;