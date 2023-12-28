// In Button.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';



const Main = ({ onPress, title }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
    </View>
    
  );
}



export default Main;