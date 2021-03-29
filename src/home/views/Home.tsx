import { Card, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/store/configureStore';
import { fetchShows } from '../home.actions';
import { TVShow } from '../reducer/home.reducer';

const cardStyle = {
  flex: 1,
  flexDirection: 'column',
  margin: 10,
  heigth: 350,
  alignItems: 'center',
};

const renderIcon = (props: any) => <Icon {...props} name="search-outline" />;

export const Home = () => {
  const { shows, loading, failure } = useSelector(
    (state: RootState) => state.home,
  );

  const [valueSearch, setValueSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows(valueSearch));
  }, [dispatch, valueSearch]);

  const renderContent = () => {
    if (loading) {
      return (
        <Layout
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={{ height: 200, width: 200 }}
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
        <Layout
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Image
            source={require('../../assets/icons/cancel.png')}
            style={{ height: 200, width: 200 }}
          />
          <Text category="h5">An error occured. Please try again!</Text>
        </Layout>
      );
    }
    return (
      <>
        <FlatList
          data={shows}
          renderItem={renderItem}
          keyExtractor={item => item.show.id}
          numColumns={2}
        />
      </>
    );
  };

  const renderItem = ({ item }: { item: TVShow }) => (
    <Card style={cardStyle as any}>
      <Image
        source={{ uri: item.show.image?.medium }}
        style={{ height: 200, width: 125 }}
      />
      <Text category="h6">{item.show.name}</Text>
    </Card>
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
