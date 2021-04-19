import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ScorePage from './ScorePage'
import Settings from '../routes/Settings'
import HomePage from './HomePage'
import ScoreCard from './ScoreCard'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
      <Stack.Screen name="ScorePage" component={ScorePage} options={{ headerShown: false }} />
      <Stack.Screen name="ScoreCard" component={ScoreCard} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Stack.Navigator>
    </>
  );
}

export default MyStack