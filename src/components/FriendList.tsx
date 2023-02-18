import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Friend } from './Friend';

interface FriendListProps {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  }[],
  follow: () => void;
}

export const FriendList = ({ data, follow }: FriendListProps) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0)
  }, [data]);

  return (
    <View style={{ margin: 10 }} >
      <Text>
        Total de likes: {totalLikes}
      </Text>

      <FlatList 
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Friend 
            key={String(item.id)}
            data={item}
            follow={follow}
          />
        )}
      />
    </View>
  );
}