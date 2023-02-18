import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface FriendProps {
  data: {
    id: number;
    name: string;
    likes: number;
  },
  follow: () => void;
}

const FriendComponent = ({ data, follow }: FriendProps) => {
  return (
    <View>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>
      <TouchableOpacity onPress={follow}>
          <Text>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});