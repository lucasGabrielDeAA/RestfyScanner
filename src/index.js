import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
