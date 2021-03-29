import { Dimensions, StyleSheet } from 'react-native';

const screenDimensions = Dimensions.get('window');

export const tvShowDetailsStyles = StyleSheet.create({
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
  stars: {
    width: 16,
    height: 16,
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
  content: {
    marginHorizontal: 10,
  },
});

export const homeStyles = StyleSheet.create({
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
