import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(10, 14, 17, 1)',
  },
});

const Listplan = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <Text>Listplan Screen</Text>
    </View>
    
  );
}



export default Listplan;