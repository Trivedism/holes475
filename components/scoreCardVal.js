import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import NumericInput from 'react-native-numeric-input'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';


const scoreCardVal = (props) => {
 // const [holes, setHoles] = useState(props.holes)
  const [name, setName] = useState(props.name)
  const [names, setNames] = useState([])
  var holes = Array.from(Array(props.holes).keys())
  console.log("Holes" + holes.length)
        
        return (
          <View style={styles.cardItemContainer}>
         
            <View style={styles.scoreContainer}>
              <View  style = { {flexDirection : 'row', alignItems: 'center', padding: 10,  justifyContent: 'center'}} >
                {/* <Text style={styles.teamName}>{props.name}</Text> */}
                <View style = {{marginHorizontal: 10}}>
                <FontAwesome5 name="user-edit" size={20} color="#ffffff" />
                </View>
                <TextInput style={styles.teamName} placeholder={name} onChangeText={(val) => setName(val), (val) => setNames(names.concat(val))}/>
                
              </View>
              
              <View style = {{flexDirection: 'row'}}>
                <ScrollView 
                    horizontal={true}
                >

                  {holes.map((data, index) => {
                    return(
                     <View style = {{padding: 5}}>
                      <Text>    Hole { index+1 }                </Text>
                      <NumericInput type='up-down'
                      onChange={value => console.log(value)}
                      valueType='real'
                      rounded />   
                     </View>
                    ) })
                  }
                </ScrollView>
              </View>

              <Text style={styles.teamScore}>{props.score}</Text>
            </View>
          </View>
          
        );
      }


const styles = StyleSheet.create({
 

    cardItemContainer: {
      borderRadius: 8,
      borderColor: "black",
      borderWidth: 1,
      margin: 12,
      backgroundColor: "#37D67A",
      alignItems: "center"
      
    },

    scoreContainer: {
      margin: 1
    },
    teamName: {
      fontSize: 14,
      textAlign: "center",
      fontWeight: "bold"
    },
    teamScore: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold"
    }
  });

  export default scoreCardVal;