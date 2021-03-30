import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HTML from 'react-native-render-html';

const tvShowDetailsStyles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
  },
});

const getGenres = (genres: string[]): string => {
  return `Genre: ${genres.join(', ')}`;
};

type TVShowContentProps = {
  rating: number;
  genres: string[];
  summary: string;
};

export const TVShowContent = (props: TVShowContentProps) => (
  <View style={tvShowDetailsStyles.content}>
    <Text category="h6">Rating: {props.rating || 'Not available'}</Text>
    {props.genres.length ? (
      <Text category="h6">{getGenres(props.genres)}</Text>
    ) : null}
    <HTML source={{ html: props.summary }} />
  </View>
);
