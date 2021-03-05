import * as React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NumericInput from 'react-native-numeric-input'

function HomePage({ navigation }) {
  return (
    <View style={{  flexDirection: 'column',  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Holes.png')}
      />
      <View style = {{padding: 10}}>
          <Button
             title="Go to Score Card"
              onPress={() => navigation.navigate('scoreCard')}
           />

      </View>

        <View style = {styles.spacing}>
          <Button
             title="Add Players"
          />
          <View styte = {{marginLeft: 20}}>
          <NumericInput
           onChange={value => console.log(value)} 
           onLimitReached={(isMax,msg) => console.log(isMax,msg)}
           totalWidth={70} 
           totalHeight={30} 
           valueType='real'
           rounded 
          />
          </View>
      </View>

      <View style = {styles.spacing}>
          <Button
             title="Add Holes"
          />
          <View styte = {styles.spacing}>
          <NumericInput
           onChange={value => console.log(value)} 
           onLimitReached={(isMax,msg) => console.log(isMax,msg)}
           totalWidth={70} 
           totalHeight={30} 
           valueType='real'
           rounded 
          />
          </View>
      </View>
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
    width: 200,
    height: 200,
  },

 spacing: {
  flexDirection: 'row',
  padding: 10
 }

})