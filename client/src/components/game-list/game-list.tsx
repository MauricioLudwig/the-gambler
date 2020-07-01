import React from 'react';
import * as _ from 'lodash';
import { Typography } from 'antd';
import GameListItem from '../game-list-item';

const { Title } = Typography;

const GameList = ({ games }) => {
  const gamesByCategory = _.groupBy(games, 'category');

  return (
    <div>
      {
        Object.keys(gamesByCategory).map(key => {
          const games = gamesByCategory[key];

          return (
            <div key={key} className="games-list-container">
              <Title level={4}>{key}</Title>
              <div>
                {
                  games.map(o => <GameListItem key={o.id} {...o} />)
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default GameList;