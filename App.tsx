/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/register';
import PostDetail from './src/screens/postDetail';
import Home from './src/screens/home';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import Login from './src/screens/login';
import {PersistGate} from 'redux-persist/integration/react';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                // headerShown: true,
                // presentation: 'modal',
                // animationTypeForReplace: 'push',
                animation: 'slide_from_left',
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: true,
                // presentation: 'modal',
                // animationTypeForReplace: 'push',
                // animation: 'slide_from_left',
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: true,
                // presentation: 'modal',
                // animationTypeForReplace: 'push',
                // animation: 'slide_from_left',
              }}
            />
            <Stack.Screen
              name="PostDetail"
              component={PostDetail}
              options={{
                headerShown: true,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                // headerLeft: () => (
                //   <Button
                //     title="geri"
                //     onPress={() => console.log('geriye tıklandı')}
                //   />
                // ),
                // presentation: 'modal',
                // animationTypeForReplace: 'push',
                // animation: 'slide_from_left',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
