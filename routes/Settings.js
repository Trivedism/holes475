import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NumericInput from 'react-native-numeric-input';


function SettingsScreen({ navigation }) {

    return (
      
      <View>

        <View style = {{marginTop: 30, alignItems: 'flex-start', marginLeft: 15}}>
          <Button 
          title="Go back" onPress={() => navigation.navigate('HomePage')} 
          color = "#37D67A"/> 
        </View>

      <View style = {{marginTop: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Change Number of Holes"
          color = "#37D67A"
        />
        <NumericInput 
        type = 'up-down'
        onChange={value => console.log(value)}
        valueType='real'/>
      </View>

        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginRight: 10}}>
          <View style = {{marginRight: 10}} >
            <Button 
              title="Score Card" onPress={() => navigation.navigate('ScoreCard',)} 
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
  

export default SettingsScreen