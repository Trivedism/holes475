import React, { Component } from "react";
import { ImageBackground, Image, Text, View, StyleSheet } from "react-native";

const Scoreboard = (props) => {
        return (

         // <ImageBackground style = {styles.back} source={require('../assets/grass.jpg')} >
            

          <View style={styles.cardItemContainer}>
            <View style={styles.scoreContainer}>
              <View>
                <Text style={styles.teamName}>{props.name}</Text>
              </View>
              <Text style={styles.teamScore}>{props.score}</Text>
            </View>
          </View>

         // </ImageBackground>
        );
      }


const styles = StyleSheet.create({
 

    cardItemContainer: {
      borderRadius: 8,
      borderColor: "black",
      borderWidth: 1,
      margin: 8,
      backgroundColor: "#37D67A",
      alignItems: "center"
      
    },
    back: {
      flex: 1,
      flexDirection: "column"
    },

    scoreContainer: {
      margin: 3
    },
    teamName: {
      fontSize: 14,
      textAlign: "center",
      fontFamily: "monospace",
      fontWeight: "bold"
    },
    teamScore: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "monospace"
    },
    ranking: {
      fontSize: 12,
      textAlign: "left",
      

    }
  });

  export default Scoreboard;