import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScoreCardVal from '../components/scoreCardVal'
import { Image, ImageBackground, ScrollView, Text } from 'react-native';
import { set } from 'react-native-reanimated';
import { useState, useEffect} from 'react'
function ScoreCard({ navigation: {navigate}, route}) {

    var players = Array.from(Array(route.params.players).keys())
    var holesVal = Array.from(Array(route.params.holes).keys())
    const [names, setNames] = useState([])
    var nameVals = []
    
    // console.log(names.length)
    return (
      <>



      {
      names.map((data, index) => {
            return (
              console.log("Data" + data)
            )
      })
     }

      <ImageBackground style = {styles.back} source={require('../assets/grass.jpg')} >

      <View style = {{marginTop: 30, alignItems: 'flex-start', marginLeft: 15}}>
        <Button 
        title="Go back" onPress={() => navigate('HomePage')} 
        color = "#37D67A"/> 
      </View>
        <View style = {{alignItems:'center', justifyContent:'center',}}>
          <Image
          source={require('../assets/scorecard.png')}
          />
        </View>
       


      
      
      
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
      
   
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection : 'row' }}>
      
      <View  style = {{marginRight: 10}}>
        <Button
          title="Settings"
          onPress={() => navigate('Settings')}
          color = "#37D67A"
        />
        </View>
      <View style = {{marginLeft: 10}}>
      <Button
          title="End Game"
          onPress={() => navigate('ScorePage', { players: players , names: names})}
          color = "#37D67A"
        />
        </View>

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
    tinyLogo: {
      marginTop:10,
      marginBottom: 20,
      alignItems:'center',
      justifyContent:'center',
      width: 100,
      height: 100,
    },
  });

  export default ScoreCard