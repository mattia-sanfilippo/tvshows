import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const tvShowCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    height: 300,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 125,
    resizeMode: 'contain',
  },
});

type TVShowCardProps = {
  title: string;
  image?: string;
  onPress: () => void;
};

export const TVShowCard = (props: TVShowCardProps) => (
  <Card style={tvShowCardStyles.card} onPress={props.onPress}>
    <Image
      source={
        props.image
          ? { uri: props.image }
          : require('../../assets/images/imageNotAvailable.png')
      }
      style={tvShowCardStyles.image}
    />
    <Text category="h6">{props.title}</Text>
  </Card>
);
