import React, { FunctionComponent } from 'react';
import MessageListItem from '../message-list-item';

interface Props {
  messages: Message[]
}

interface Message {
  id: string,
  text: string,
  read: boolean,
  date: string
}

const Messages: FunctionComponent<Props> = ({ messages }) => {
  const sortByDate = (a: Message, b: Message): number => new Date(b.date).getTime() - new Date(a.date).getTime();

  return (
    <div className="messages-list">
      <p className="messages-list__count">Messages ({messages.length})</p>
      {
        messages.sort(sortByDate).map(({ id, ...rest }) => (
          <MessageListItem key={id} {...rest} />
        ))
      }
    </div>
  );
}

export default Messages;