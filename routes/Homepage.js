import * as React from 'react';
import { Button, View, Image, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class App extends React.Component{
  state ={
    color: 'Purple'
  }
}
function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Holes.png')}
      />
      <Button
      
        title="Go to Score Card"
        onPress={() => navigation.navigate('scoreCard')}
      />
    </View>
  );
}

export default HomePage

const styles = StyleSheet.create({
  tinyLogo: {
    marginTop:10,
    marginBottom: 20,
    alignItems:'center',
    justifyContent:'center',
    width: 250,
    height: 250,
  },
})