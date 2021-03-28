import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NumericInput from 'react-native-numeric-input';


function SettingsScreen({ navigation }) {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style = {{flexDirection: 'row'}}>
      <Button
        title="Change Number of Holes"
        color = "#37D67A"
      />
      <NumericInput 
      type = 'up-down'
      onChange={value => console.log(value)}
      valueType='real'/>
      </View>

        <View style ={{marginTop: 10}}>
        <Button 
        title="Back to Score Card" onPress={() => navigation.navigate('scoreCard',)} 
        color = "#37D67A"/>
        </View>

        <View style ={{marginTop: 10}}>
        <Button 
        title="New Game" onPress={() => navigation.navigate('Homepage',)} 
        color = "#37D67A"/>
        </View>
      </View>
    

    );
  }
  

export default SettingsScreen