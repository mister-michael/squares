import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Squares from './app/screens/Squares';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Squares />
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
