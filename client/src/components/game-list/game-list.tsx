import React, { FunctionComponent } from 'react';
import _ from 'lodash';
import { Typography } from 'antd';
import GameListItem from '../game-list-item';

interface Props {
  games: Game[]
}

interface Game {
  id: number,
  name: string,
  category: string
}

const { Title } = Typography;

const GameList: FunctionComponent<Props> = ({ games }) => {
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