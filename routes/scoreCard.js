import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scoreboard from '../components/Scoreboard'

function scoreCard({ navigation }) {
    return (
      <>
      <Scoreboard name = "SCORE CARDDDDD" score = "6"/>
      <Scoreboard name = "Gayanth" score = "9"/>
      <Scoreboard name = "SammmyTesla" score = "69"/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
          color = "#37D67A"
        />
        <Button
          title="Go to Final Scores"
          onPress={() => navigation.navigate('Scorepage')}
          color = "#37D67A"
        />
        <Button title="Go back" onPress={() => navigation.goBack()} 
        color = "#37D67A"/>
      </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#90EE90', 
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default scoreCard