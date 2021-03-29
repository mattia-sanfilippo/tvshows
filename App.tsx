import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/home/views/Home';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { store } from './src/shared/store/configureStore';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TVShowDetails } from './src/home/views/TVShowDetails';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'TV Shows' }}
              />
              <Stack.Screen name="TVShowDetails" component={TVShowDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
