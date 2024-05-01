import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '@src/Home';
import Mine from '@src/Mine';

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Mine" component={Mine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});

export default App;
