import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Scan from './pages/Scan';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{headerTransparent: true, headerTitle: null}}
      />
    </Stack.Navigator>
  );
}
