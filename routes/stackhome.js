import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Scoreboard from '../components/Scoreboard';
import scorepage from '../routes/scorepage'
import Settings from '../routes/Settings'
import Homepage from '../routes/Homepage'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Scorepage" component={scorepage} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </>
  );
}

export default MyStack