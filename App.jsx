import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';

export default function App() {
  return (
    
    <View style={styles.container}>
      < Login />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(10, 14, 17, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});