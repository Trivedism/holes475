import React, { Component, useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView, ImageBackground } from "react-native";
import NumericInput from 'react-native-numeric-input'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';


const scoreCardVal = (props) => {
 // const [holes, setHoles] = useState(props.holes)
  var initName= props.name
  const [name, setName] = useState('')
  const [names, setNames] = useState([])
  var holes = Array.from(Array(props.holes).keys())
  const add = props.addName
  const [num, setNum] = useState(0)
  var currName = "Hello"

  const change = (value) => {
    currName.concat(value)
  }

  // useEffect(() => {
                    
  //   return () => {
  //     console.log("Names" + name)
  //   }
  // }, [name])
        
        return (

          
          
          <View style={styles.cardItemContainer}>
         
            <View style={styles.scoreContainer}>
              <View  style = { {flexDirection : 'row', alignItems: 'center', padding: 10,  justifyContent: 'center'}} >
                {/* <Text style={styles.teamName}>{props.name}</Text> */}
                <View style = {{marginHorizontal: 10}}>
                <FontAwesome5 name="user-edit" size={20} color="#ffffff" />
                </View>
                <TextInput style={styles.teamName} placeholder={initName} onChangeText={name => setName(name)}
                defaultValue={name} onSubmitEditing={() => add(name)}
                />
                {
                  //console.log("Num" + name)
                }
              </View>
              <View style = {{flexDirection: 'row'}}>
              <ScrollView horizontal={true} >
              {
                holes.map((data, index) => {
                    return(
                     <View style = {{padding: 5, alignItems: 'center'}}>
                      <View style = {{flexDirection: 'row'}}>
                        <Ionicons name="golf" size={20} color="#FFFACD"/>
                      <Text style = {{color : "white"}}>  
                         { index+1 }              
                      </Text>
                      </View>
                      <NumericInput type='up-down'
                      onChange={value => console.log(value)}
                      valueType='real'
                      rounded />   
                     </View>
                    ) 
                  })
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
      borderColor: "grey",
      borderWidth: 2,
      margin: 8,
      backgroundColor: "#37D67A",
    // backgroundColor: '#00000000',
      alignItems: "center"
      
    },

   
   
    scoreContainer: {
      margin: 1
    },
    teamName: {
      fontSize: 13,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "monospace"
      
    },
    teamScore: {
      fontSize: 10,
      textAlign: "center",
      fontWeight: "bold"
    }
  });

  export default scoreCardVal;