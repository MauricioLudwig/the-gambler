import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Layout, Button, Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import MessageList from '../../components/message-list';

const { Header, Content } = Layout;
const { Title } = Typography;

const Home = (props) => {
  const {
    user,
    messages,
    history,
    signOut,
    signinOut,
    getMessages,
    loadMessages,
    addMessage
  } = props;

  useEffect(() => {
    getMessages();
    const socket = socketIOClient(`http://localhost:3000/?token=${user.token}`);
    socket.on('new-message', data => {
      console.log('new message', data);
      addMessage(data);
    })
  }, []);

  const signoutHandler = () => {
    signOut().then(() => {
      history.push('/login');
    }).catch(() => {
      alert('Unexpected error');
    });
  };

  return (
    <Layout>
      <Header className="header">
        <Title level={3}>
          The Gambler
        </Title>
        <div>
          <Button
            onClick={signoutHandler}
            disabled={signinOut}
            shape="round"
            icon={<LogoutOutlined />}
          />
        </div>
      </Header>
      <Layout>
        <Content className="main-container">
          <div className="messages-container">
            <MessageList messages={messages} />
          </div>
          <div className="games-container">
            games conatiner
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;