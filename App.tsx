import { StyleSheet, Text, View, TextInput, Button, Switch  } from 'react-native';
import React, { useState } from "react";
import Regform from './components/Regform';

export default function App() {
  return (
    <View style={styles.container}>
      <Regform />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fda50f',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  }
});
