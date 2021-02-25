import React from 'react';
import { StyleSheet, Text, View, Easing } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

//icons
import { AntDesign } from '@expo/vector-icons';

//screens
import Signin from './src/screen/Signin';
import Signup from './src/screen/Signup';
import Search from './src/screen/Search';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const authScreen = () => (
  <Stack.Navigator
    initialRouteName="Signin"
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      // transitionSpec: {
      //   open: config,
      //   close: closeConfig
      // }
    }}
    headerMode="float"
    animation="fade"
  >
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
);

const routerSetting = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          // transitionSpec: {
          //   open: config,
          //   close: closeConfig
          // }
        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Auth" component={authScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default routerSetting;

const styles = StyleSheet.create({});
