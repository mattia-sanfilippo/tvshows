import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { TVShow } from '../reducer/home.reducer';
import { ImageBackground, View } from 'react-native';
import { tvShowDetailsStyles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';

const getGenres = (genres: string[]): string => {
  return `Genre: ${genres.join(', ')}`;
};

export const TVShowDetails = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { tvShow }: { tvShow: TVShow } = route.params;
  navigation.setOptions({
    title: tvShow.show.name,
  });
  return (
    <ScrollView>
      <Layout style={tvShowDetailsStyles.imageWrapper}>
        <ImageBackground
          style={tvShowDetailsStyles.image}
          source={{ uri: tvShow.show.image?.original }}>
          <View style={tvShowDetailsStyles.bottom}>
            <Text style={tvShowDetailsStyles.title} category="h2">
              {tvShow.show.name} (
              {new Date(tvShow.show.premiered).getFullYear()})
            </Text>
          </View>
        </ImageBackground>
      </Layout>
      <View style={tvShowDetailsStyles.content}>
        <Text category="h6">
          Rating: {tvShow.show.rating.average || 'Not available'}
        </Text>
        {tvShow.show.genres.length ? (
          <Text category="h6">{getGenres(tvShow.show.genres)}</Text>
        ) : null}
        <HTML source={{ html: tvShow.show.summary }} />
      </View>
    </ScrollView>
  );
};
