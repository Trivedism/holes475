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
  const [holes, setHoles] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Holes.png')}
      />
      <View style = {styles.spacing}>
      <Button
        
        title="Go to Score Card"
        onPress={() => navigate('scoreCard', { players: players, holes: holes })}
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
       maxValue={15}
       minValue={1}
       />

    </View>

    <View style = {styles.spacing}>
      
      <Button style = {styles.font}
        title="Add Holes"
        color = "#37D67A"
      />

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