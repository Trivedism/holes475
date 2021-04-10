import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScoreCardVal from '../components/scoreCardVal'
import { Image, ImageBackground, ScrollView, Text } from 'react-native';
import { set } from 'react-native-reanimated';
import { useState, useEffect} from 'react'
function scoreCard({ navigation: {navigate}, route}) {

    var players = Array.from(Array(route.params.players).keys())
    var holesVal = Array.from(Array(route.params.holes).keys())
    const [names, setNames] = useState([])
    var nameVals = []
    
    // console.log(names.length)
    return (
      <>
      <View style={{marginTop: 30, marginBottom: 10 }}>

      </View>
      {
      names.map((data, index) => {
            return (
              console.log("Data" + data)
            )
      })
     }

      <ImageBackground style = {styles.back} source={require('../assets/grass.jpg')} >
        

      
      
      
      {/* <ScoreCardVal name = {players.length}/>
      <ScoreCardVal name = "Player 2"/>
      <ScoreCardVal name = "Player 3"/> */}
      
      <ScrollView>
      <View>
      
      {
        players.map((data, index) => {
          nameVals.concat("")
          return(
            <>
            </>
          )
        })
      }
      {
        players.map((data, index) => {
            
            return(
              <ScoreCardVal holes = {holesVal.length} key ={index.toString()} name = {`Player ${ index+1 }`} addName={(val) => setNames(names.concat(val))}/>

            )
        })

      }
        
      </View>
      
   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <View style = {{marginVertical: 20}}>
      <Button
          title="Go to Final Scores"
          onPress={() => navigate('Scorepage', { players: players , names: names})}
          color = "#37D67A"
        />
        </View>

        <View  style = {{marginBottom: 20}}>
        <Button
          title="Go to Settings"
          onPress={() => navigate('Settings')}
          color = "#37D67A"
        />
        </View>

        <Button title="Go back" onPress={() => navigation.goBack()} 
        color = "#37D67A"/> 
      </View>
      </ScrollView>
    
      
      </ImageBackground>

      </>
      
    );
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },

    back: {
      flex: 1,
      flexDirection: "column"
    },

    item: {
      backgroundColor: '#90EE90', 
     // backgroundColor: 'rgba(52, 52, 52, 0.8)'
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default scoreCard