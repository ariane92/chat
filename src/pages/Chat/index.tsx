import React, { useCallback } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Container } from './styles';

const Chat: React.FC = () => {
  const handleSendMessage = useCallback(messages => {
    console.log(messages);
  }, []);
  const user = {
    _id: 1,
    name: 'Ariane',
    avatar: 'url',
  };

  const messages = [
    {
      _id: 1,
      text: 'Fala Dev',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Thaís',
        avatar: 'url2',
      },
    },

    {
      _id: 2,
      text: 'Boa Tarde',
      createdAt: new Date(),
      user: {
        _id: 3,
        name: 'Lele',
        avatar: 'url2',
      },
    },
  ];

  return (
    <GiftedChat user={user} messages={messages} onSend={handleSendMessage} />
  );
};

export default Chat;
