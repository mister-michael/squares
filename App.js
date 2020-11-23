import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import colors from './app/colors/colors';
import HomeScreen from './app/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.two}/>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.three}/>
      <HomeScreen colorArray={colors.two}/>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.three}/>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.two}/>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.three}/>
      <HomeScreen colorArray={colors.two}/>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.three}/>
      <HomeScreen colorArray={colors.three}/>
      <HomeScreen colorArray={colors.two}/>
      <HomeScreen colorArray={colors.one}/>
      <HomeScreen colorArray={colors.three}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
