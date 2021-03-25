import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TextInput, NativeModules } from "react-native";
import NumericInput from 'react-native-numeric-input'


const scoreCardVal = (props) => {
 // const [holes, setHoles] = useState(props.holes)
  const [name, setName] = useState(props.name)
  const [names, setNames] = useState([])
  var holes = Array.from(Array(props.holes).keys())
  console.log("Holes" + holes.length)
        
        return (
          <View style={styles.cardItemContainer}>
            <View style={styles.scoreContainer}>
              <View>
                {/* <Text style={styles.teamName}>{props.name}</Text> */}
                <TextInput style={styles.teamName} placeholder={name} onChangeText={(val) => setName(val), (val) => setNames(names.concat(val))}/>
              </View>
              
              <View style = {styles.spacing}>


                </View>

              <View style = {{flexDirection: 'row'}}>
              {
        holes.map((data, index) => {
            return(
              <View>
              <Text>    Hole { index+1 }                </Text>
              <NumericInput type='up-down'
                onChange={value => console.log(value)}
                valueType='real'
                rounded />
                
              </View>
              
            )
        })
      }

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