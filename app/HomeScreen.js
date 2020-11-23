import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "./colors/colors";
import Square from "./Square";

function HomeScreen({colorArray}) {
  const squareArray = [];

  const getStuff = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    for (let i = 0; i <= randomNumber; i++) {
      squareArray.push(<Square colorArray={colorArray} />);
    }
  };

  getStuff();

  return <>{squareArray.map((square) => square)}</>;
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
  },
});

export default HomeScreen;
