import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { FONT_REGULAR, greenColor } from '../assets/colors';

const Main = () => {
  // circle 
  const widthAndHeight = 200;
  const series = [75, 25];
  const sliceColor = ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'];
  const widthAndHeightred = 10;
  const widthAndHeightyellow = 10;
  const red = [100, 0];
  const yellow = [0, 100];

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View style={styles.data}>
          <View style={styles.pay}>
            <PieChart style={styles.pieChart} widthAndHeight={widthAndHeightred} series={red} sliceColor={sliceColor} />
            <Text style={styles.label}>Payment Pending</Text>
          </View>
          <View style={[styles.pay, { marginTop: 30 }]}>
            <PieChart style={styles.pieChart} widthAndHeight={widthAndHeightyellow} series={yellow} sliceColor={sliceColor} />
            <Text style={styles.label}>Payment Pending</Text>
          </View>
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
  
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    height: '33%',
    borderWidth: 2,
    borderColor: greenColor,
    borderRadius: 45,

  },
  label: {
    color: 'white',
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    marginLeft: 15, // Adjust the marginLeft value as needed
  },
  data: {
    flexDirection: 'column', // Change to row to place PieCharts and Texts side by side
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  pay: {
    flexDirection: 'row', // Change to row to place PieChart and Text side by side
    alignItems: 'center',
    marginRight: 10, // Adjust the marginRight value as needed
    
  },
  
  pieChart: {
    marginRight: 5, // Adjust the marginRight value as needed
    
  },
});

export default Main;
