import * as React from 'react';
import { Button, View, StatusBar,StyleSheet,Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NumericInput from 'react-native-numeric-input';
import {useState} from 'react'


function Settings({ navigation }) {
  const [players, setPlayers] = useState(0);
  const [holes, setHoles] = useState(0);

    return (
      
      <View>

        <View style = {{marginTop: 30, alignItems: 'flex-start', marginLeft: 15}}>
          <Button 
          title="Go back" onPress={() => navigation.navigate('HomePage')} 
          color = "#37D67A"/> 
        </View>
        <View style = {{alignItems:'center', justifyContent:'center',}}>
          <Image
          source={require('../assets/settings.png')}
          />
        </View>

        <View style = {{marginTop: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style = {{marginBottom: 30,marginRight:10}}>
            <View style = {{marginBottom: 10,marginLeft:20}}><Text>Players</Text></View>
            <NumericInput type='up-down'
            initValue= {players}
            value={players}
            onChange={value => setPlayers(value)}
            valueType='real'
            rounded 
            maxValue={15}
            minValue={1}
            />
          </View>
          
          <View style = {{marginBottom: 30}}>
            <View style = {{marginBottom: 10,marginLeft:20}}><Text>Holes</Text></View>
            <NumericInput type='up-down'
            initValue= {holes}
            value={holes}
            onChange={value => setHoles(value)}
            valueType='real'
            rounded
            minValue={1}
            maxValue={18}
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            />
          </View>
          
        </View>

        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginRight: 10}}>
          <View style = {{marginRight: 10}} >
            <Button 
              title="Score Card" onPress={() => navigation.navigate('ScoreCard', { players: players, holes: holes })}
              color = "#37D67A"/>
          </View>
            <View style = {{marginLeft: 10}}>
              <Button 
              title="New Game" onPress={() => navigation.navigate('HomePage',)} 
              color = "#37D67A"/>
            </View>
            
        </View>
  
      </View>
    

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
    spacing: {
      padding :15, 
      marginRight: 10,
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent : 'stretch'
  
  
    },
  });
export default Settings