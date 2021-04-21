import * as React from 'react';
import { Button, View, StatusBar, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scoreboard from '../components/Scoreboard'
import RankingsBanner from '../components/RankingsBanner'

function ScorePage({ navigation: {navigate}, route }) {

   var players = route.params.players
   var names = route.params.names

    return (
      <>
      <View style={{marginTop:30}}></View>
      <View>
      <View style = {{alignItems:'center', justifyContent:'center',}}>
          <Image
          source={require('../assets/finalscores.png')}
          />
        </View>
      {
        players.map((data, index) => {
            return(
              <Scoreboard key ={index.toString()} name = {`${index+1} | ${names[index]}: ${(index+1)*3}`}/>
            )
        })
      }

      </View >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 9, marginBottom: 10 }}>
        <Button 
        title="New Game" onPress={() =>navigate('HomePage')}
        color = "#37D67A" />
      </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    banner:{
      borderRadius: 8,
      borderColor: "black",
      borderWidth: 1,
      margin: 15,
      backgroundColor: "#37D67A",
      alignItems: "center"
    },

    bannerWrite:{
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "monospace"
    },
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

  export default ScorePage