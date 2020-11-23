import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "./colors/colors";

function Square({
  widthProp = 27,
  height = 27,
  color = "red",
  borderRadius = 0,
  colorArray
}) {
    const randomNumbers = () => {
        return Math.floor(Math.random() * 8)}


    const getColor = () => {
        return colorArray[Math.floor(Math.random() * 5)]
        }

  const styles = StyleSheet.create({
    container: {
      width: widthProp,
      height: height,
      backgroundColor: getColor(),
      borderRadius: borderRadius
    },
  });
  return <View style={styles.container}>
      {/* <Text>GOO BOEY</Text> */}
  </View>;
}
export default Square;
