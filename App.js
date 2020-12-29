import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import NewEntry from './src/screens/NewEntry';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
          <Screen name="Home" component={Home} />
          <Screen name="NewEntry" component={NewEntry} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
