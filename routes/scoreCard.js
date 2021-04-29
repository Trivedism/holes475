import * as React from 'react';
import { Button, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScoreCardVal from '../components/scoreCardVal'
import { Image, ImageBackground, ScrollView, Text } from 'react-native';
import { set } from 'react-native-reanimated';
import { useState, useEffect} from 'react'
import { Player } from '../components/Player'

function ScoreCard({ navigation: {navigate}, route}) {

    var players = Array.from(Array(route.params.players).keys())
    var holesVal = Array.from(Array(route.params.holes).keys())
    const [names, setNames] = useState([])
    var nameVals = []
    const [holes, setHoles] = useState([])
    let gamePlayers = []
    let sums = []

    for (let i = 0; i < players.length; i++) {
      let newPlayer = Player("", []);
      gamePlayers.push(newPlayer);
      // setHoles(oldArray => [...oldArray, 0]);
    }
    
    for (let i = 0; i < players.length; i++) {
      sums.push([])
      for (let j = 0; j < holesVal.length; j++) {
        sums[i].push(0)
      }
    }
    

    // this.state = { gamePlayers }

    // console.log("name" + gamePlayers[0].name)

    function populatePlayerName(i, name) {
      setNames(names.concat(name));
      const temp = [...gamePlayers]
      let currPlayer = temp[i];
      currPlayer.name = name;
      console.log("name" + gamePlayers[i].name)
    }



    function populatePlayerScore(playerIndex, score, holeIndex) {
      // setHoles(oldArray => [...oldArray[playerIndex], score]);
      // const temp = [...gamePlayers]
      // let currPlayer = temp[i];
      // currPlayer.score = currPlayer.score + score;
      // gamePlayers[i].score = gamePlayers[i].score + score
      sums[playerIndex][holeIndex] = sums[playerIndex][holeIndex] + score
      // console.log("scoreee" + playerIndex + " " + holeIndex+  " " + sums[playerIndex][holeIndex])
      // console.log("Player" + playerIndex + " Scores: " + sums[playerIndex])
    }

      // console.log("Holes" + holes)


    // for (let i = 0; i < players.length; i++) {
    //   console.log("Player" + i + " Scores: " + sums[i])
    // }
    // console.log(gamePlayers[0].score)
    
    return (
      <>



      {
      
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
            return(
              <ScoreCardVal holes = {holesVal.length} key ={index.toString()} name = {`Player ${ index+1 }`} addName={(val) => populatePlayerName(index, val)} addHoles={(i, val) => populatePlayerScore(index, val, i)} />
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
          onPress={() => navigate('ScorePage', { players: players , names: names, holes: holes})}
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