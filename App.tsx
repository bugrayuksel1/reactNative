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
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
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
          name="PostDetail"
          component={PostDetail}
          options={{
            headerShown: false,
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
  );
}

const styles = StyleSheet.create({});

export default App;
