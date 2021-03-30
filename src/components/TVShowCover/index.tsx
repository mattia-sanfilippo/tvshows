import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';

const screenDimensions = Dimensions.get('window');

const tvShowCoverStyles = StyleSheet.create({
  imageWrapper: {
    height: 200,
    width: screenDimensions.width,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.9,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    backgroundColor: 'black',
    marginBottom: 10,
  },
});

type TVShowCoverProps = {
  title: string;
  image?: string;
  premieredDate: string;
};

export const TVShowCover = (props: TVShowCoverProps) => (
  <Layout style={tvShowCoverStyles.imageWrapper}>
    <ImageBackground
      style={tvShowCoverStyles.image}
      source={{ uri: props.image }}>
      <View style={tvShowCoverStyles.bottom}>
        <Text style={tvShowCoverStyles.title} category="h2">
          {props.title} ({new Date(props?.premieredDate).getFullYear()})
        </Text>
      </View>
    </ImageBackground>
  </Layout>
);
