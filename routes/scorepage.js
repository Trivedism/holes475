import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scoreboard from '../components/Scoreboard'

function Scorepage({ navigation }) {
    return (
      <>
      <Scoreboard name = "Oshea" score = "6"/>
      <Scoreboard name = "Gayanth" score = "9"/>
      <Scoreboard name = "SammmyTesla" score = "69"/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
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

  export default Scorepage