import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scoreboard from '../components/Scoreboard'

function Scorepage({ navigation: {navigate}, route }) {

   var players = route.params.players

    return (
      <>
      <View>
      {
        players.map((data, index) => {
            return(
              <Scoreboard key ={index.toString()} name = {`Player${index}`}/>
            )
        })
      }
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          color = "#37D67A"
          title="Go to Settings"
          onPress={() => navigate('Settings')}
        />
        {/* <Button title="Go back" onPress={() => navigation.goBack()}
        color = "#37D67A" /> */}
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
      backgroundColor: "#37D67A", 
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default Scorepage