import React, { memo } from 'react';
import { Text } from 'react-native';

interface FriendProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }
}

const FriendComponent = ({ data }: FriendProps) => {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});