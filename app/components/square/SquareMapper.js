import React from "react";
import { StyleSheet } from "react-native";

import Square from "./Square";

function SquareMapper({ colorArray }) {
  const squareArray = [];

  const getStuff = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    for (let i = 0; i <= randomNumber; i++) {
      squareArray.push(<Square key={`square-${i}`} colorArray={colorArray} />);
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

export default SquareMapper;
