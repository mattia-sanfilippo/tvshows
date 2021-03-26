if (__DEV__) {
  import('./reactotronConfig').then(() =>
    console.log('Reactotron Initialized'),
  );
}
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
