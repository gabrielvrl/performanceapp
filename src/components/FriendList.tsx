import React from 'react';
import { View, Text } from 'react-native';
import { Friend } from './Friend';

interface FriendListProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export const FriendList = ({ data }: FriendListProps) => {
  return (
    <View>
      {
        data.map(friend => (
          <Friend 
            key={String(friend.id)}
            data={friend}
          />
        ))
      }
    </View>
  );
}