import React from 'react';
import { TVShow } from '../reducer/home.reducer';
import { View } from 'react-native';
import { tvShowDetailsStyles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { TVShowCover } from '../../components/TVShowCover';
import { TVShowContent } from '../../components/TVShowContent';

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
      <TVShowCover
        title={tvShow.show.name}
        image={tvShow.show.image?.original}
        premieredDate={tvShow.show.premiered}
      />
      <View style={tvShowDetailsStyles.content}>
        <TVShowContent
          rating={tvShow.show.rating.average}
          genres={tvShow.show.genres}
          summary={tvShow.show.summary}
        />
      </View>
    </ScrollView>
  );
};
