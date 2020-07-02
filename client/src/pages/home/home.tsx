import React, { useEffect } from 'react';
import Spinner from 'react-spinkit';
import socketIOClient from 'socket.io-client';
import { Layout, Button, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import MessageList from '../../components/message-list/message-list-container';
import GamesList from '../../components/game-list/game-list-container';
import Profile from '../../components/profile/profile-container';

const { Header, Content } = Layout;
const { Title } = Typography;

const Home = (props) => {
  const {
    user,
    loadingInitialData,
    addMessage,
    getProfile,
    getMessages,
    getGames,
    raiseLevel,
    signOut,
    addGame
  } = props;

  const fetchInitialData = async () => {
    await Promise.all([getGames(), getMessages(), getProfile()]);
  };

  useEffect(() => {
    fetchInitialData();
    const socket = socketIOClient(`http://localhost:3000/?token=${user.token}`);
    socket.on('new-message', (data) => {
      addMessage(data);
    });

    socket.on('level-raised', () => {
      raiseLevel();
    });

    socket.on('new-game-added', (data) => {
      addGame(data);
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  return (
    <Layout>
      <Header className="header">
        <Title level={3}>
          The Gambler
          <span className="header__subtitle"> ...a fyodor production</span>
        </Title>
        <div>
          <Button
            onClick={signOut}
            shape="round"
            icon={<LogoutOutlined />}
          />
        </div>
      </Header>
      <Layout>
        {
          loadingInitialData
            ? (
              <div className="container--loader">
                <Spinner name="cube-grid" fadeIn={0} />
                <p>Fetching profile...</p>
              </div>
            ) : (
              <Content className="main-container">
                <div className="messages-container">
                  <Profile />
                  <MessageList />
                </div>
                <div className="games-container">
                  <GamesList />
                </div>
              </Content>
            )
        }
      </Layout>
    </Layout>
  );
};

export default Home;