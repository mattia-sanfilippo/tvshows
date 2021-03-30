import { useNavigation } from '@react-navigation/native';
import { Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TVShowCard } from '../../components/TVShowCard';
import { RootState } from '../../shared/store/configureStore';
import { fetchShows, searchShows } from '../home.actions';
import { TVShow } from '../reducer/home.reducer';
import { homeStyles } from './styles';

const renderIcon = (props: any) => <Icon {...props} name="search-outline" />;

export const Home = () => {
  const { shows, loading, failure } = useSelector(
    (state: RootState) => state.home,
  );

  const [valueSearch, setValueSearch] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (valueSearch.length > 2) {
      dispatch(searchShows(valueSearch));
    } else {
      dispatch(fetchShows());
    }
  }, [dispatch, valueSearch]);

  const renderContent = () => {
    if (loading) {
      return (
        <Layout style={homeStyles.center}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={homeStyles.image}
          />
          <Text category="h5">
            Type something in the box above in order to find your favorite TV
            shows!
          </Text>
        </Layout>
      );
    }
    if (failure) {
      return (
        <Layout style={homeStyles.center}>
          <Image
            source={require('../../assets/icons/cancel.png')}
            style={homeStyles.image}
          />
          <Text category="h5">An error occurred. Please try again!</Text>
        </Layout>
      );
    }
    return (
      <FlatList
        data={shows}
        renderItem={renderItem}
        keyExtractor={item => item.show.id}
        numColumns={2}
        style={{ marginBottom: 48 }}
      />
    );
  };

  const onPressMovie = (tvShow: TVShow) => {
    navigation.navigate('TVShowDetails', { tvShow });
  };

  const renderItem = ({ item }: { item: TVShow }) => (
    <TVShowCard
      title={item.show.name}
      image={item.show.image?.medium}
      onPress={() => onPressMovie(item)}
    />
  );

  return (
    <Layout>
      <Layout style={{ marginHorizontal: 5 }}>
        <Input
          placeholder="Search for a movie..."
          value={valueSearch}
          onChangeText={value => setValueSearch(value)}
          accessoryRight={renderIcon}
        />
      </Layout>
      {renderContent()}
    </Layout>
  );
};
