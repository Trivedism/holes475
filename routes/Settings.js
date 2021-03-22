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


        {/* <Button title="Go back" onPress={() => navigation.goBack()} 
        color = "#37D67A"/> */}
      </View>
    );
  }
  

export default SettingsScreen