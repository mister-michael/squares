import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../colors/colors";
import SquareMapper from "../components/square/SquareMapper"

function Squares(props) {
  return (
    <>
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.two} />
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.three} />
      <SquareMapper colorArray={colors.two} />
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.three} />
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.two} />
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.three} />
      <SquareMapper colorArray={colors.two} />
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.three} />
      <SquareMapper colorArray={colors.three} />
      <SquareMapper colorArray={colors.two} />
      <SquareMapper colorArray={colors.one} />
      <SquareMapper colorArray={colors.three} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Squares;
