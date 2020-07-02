import React from 'react';
import { Card } from 'antd';
import moment from 'moment';
import classNames from 'classnames';

const MessageListItem = ({ text, read, date }) => {
  const messagesClasses = classNames('messages-list-item', {
    'messages-list-item--read': read
  });

  return (
    <Card className={messagesClasses} title={text}>
      <p>{moment(date).format('MMMM Do YYYY, h:mm:ss')}</p>
    </Card>
  );
}

export default MessageListItem;