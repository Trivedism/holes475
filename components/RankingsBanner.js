import React, { Component } from "react";
import { ImageBackground, Image, Text, View, StyleSheet } from "react-native";

const RankingsBanner = (props) => {
    return (
        <>
        <View style={styles.cardItemContainer}>
        <Text style={styles.teamName}>
            RANKINGS!
        </Text>
        </View>
        </>

    );
}
const styles = StyleSheet.create({
 

    cardItemContainer: {
      borderRadius: 25,
      borderColor: "black",
      borderWidth: 5,
      margin: 4,
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
      fontSize: 30,
      textAlign: "center",
      fontFamily: "monospace",
      fontWeight: "bold"

    },
    teamScore: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "monospace"
    }
  });

  export default RankingsBanner;