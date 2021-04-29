import * as React from 'react';
import { Button, View, Image, StyleSheet, TextInput,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NumericInput from 'react-native-numeric-input'
import {useState} from 'react'
import { Player } from '../components/Player'



// class App extends React.Component{
//   state ={
//     color: 'Purple'
//   }
// }


function HomePage({ navigation: {navigate} }) {
  const [players, setPlayers] = useState(0);
  const [holes, setHoles] = useState(0);
  const [gamePlayers, setThem] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Holes.png')}
      />
    <View style = {{flexDirection: 'row'}}style = {styles.spacing}>
    <View>

      <Text>    Players</Text>
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
    <Text h1>      </Text>
    <View>
      
      <Text h1>     Holes</Text>
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

       {console.log(holes)}

    </View>
    </View>
    <View style = {styles.spacing}>
      
      <Button
        title="Go to ScoreCard"
        onPress={() => navigate('ScoreCard', { players: players, holes: holes })}
        color = "#37D67A"
      />

    </View>
    </View>
  );
}

export default HomePage

const styles = StyleSheet.create({

  font:{
    fontFamily: "monospace",
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

  tinyLogo: {
    marginTop:10,
    marginBottom: 20,
    alignItems:'center',
    justifyContent:'center',
    width: 250,
    height: 250,
  },
})