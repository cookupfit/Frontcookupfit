import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';

const Main = () => {
  const widthAndHeight = 200;
  const series = [75, 25]; // Adjust these values based on your data
  const sliceColor = ['rgb(255, 99, 132)', 'rgb(255, 205, 86)']; // Adjust these colors based on your data

  //

  return (
    <View style={styles.container}>
      <View>

      </View>
      <View style={styles.chartContainer}>
        <PieChart 
        widthAndHeight={widthAndHeight} 
        series={series} 
        sliceColor={sliceColor} />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(10, 14, 17, 1)',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  
});

export default Main;
