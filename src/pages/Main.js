import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';

const Main = () => {
  const widthAndHeight = 200;
  const series = [75, 25];
  const sliceColor = ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={styles.data}>
          <Text style={styles.label}>Pending</Text>
          <Text style={styles.label}>Required</Text>
        </View>
        <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(10, 14, 17, 1)',
  },
  label: {
    color: 'white',
    fontFamily: 'FONT_REGULAR', // Make sure this font family is defined
    fontSize: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%', // Adjust the width as needed
  },
  data: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Main;