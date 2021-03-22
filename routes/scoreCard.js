import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScoreCardVal from '../components/scoreCardVal'
import { Image, ScrollView, Text } from 'react-native';

function scoreCard({ navigation: {navigate}, route}) {
    
    var players = Array.from(Array(route.params.players).keys())
    var names = []

    return (
      <>
      
      {/* <ScoreCardVal name = {players.length}/>
      <ScoreCardVal name = "Player 2"/>
      <ScoreCardVal name = "Player 3"/> */}
      
      <ScrollView>
      <View>
      
      {
        players.map((data, index) => {
            return(
              <ScoreCardVal key ={index.toString()} name = {`Player${index}`}/>
            )
        })
      }
        
      </View>
      
   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
          title="Go to Final Scores"
          onPress={() => navigate('Scorepage', { players: players })}
          color = "#37D67A"
        />
        <Button
          title="Go to Settings"
          onPress={() => navigate('Settings')}
          color = "#37D67A"
        />

        {/* <Button title="Go back" onPress={() => navigation.goBack()} 
        color = "#37D67A"/> */}
      </View>
      </ScrollView>
      
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