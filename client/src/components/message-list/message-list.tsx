import React, { FunctionComponent } from 'react';
import MessageListItem from '../message-list-item';

interface Props {
  messages: Message[]
}

export interface Message {
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
        messages.sort(sortByDate).map((message) => (
          <MessageListItem key={message.id} {...message} />
        ))
      }
    </div>
  );
}

export default Messages;