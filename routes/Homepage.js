import * as React from 'react';
import { Button, View, Image, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NumericInput from 'react-native-numeric-input'
import {useState} from 'react'



// class App extends React.Component{
//   state ={
//     color: 'Purple'
//   }
// }


function HomePage({ navigation: {navigate} }) {
  const [players, setPlayers] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Holes.png')}
      />
      <View style = {styles.spacing}>
      <Button
        
        title="Go to Score Card"
        onPress={() => navigate('scoreCard', { players: players })}
        color = "#37D67A"
        
      />

    </View>

    <View style = {styles.spacing}>

      <Button
        title="Add Players"
        color = "#37D67A"
      />
      <NumericInput type='up-down'
       initValue= {players}
       value={players}
       onChange={value => setPlayers(value)}
       valueType='real'
       rounded 
       />

    </View>

    <View style = {styles.spacing}>
      <Button
        title="Add Holes"
        color = "#37D67A"
      />

      <NumericInput type='up-down'
       onChange={value => console.log(value)}
       valueType='real'
       rounded 
       onLimitReached={(isMax,msg) => console.log(isMax,msg)}
       />

    </View>
    </View>
  );
}

export default HomePage

const styles = StyleSheet.create({

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