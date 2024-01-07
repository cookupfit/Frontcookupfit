// In Button.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  FONT_REGULAR,
  whiteColor,
  greenColor,
  redColor,
  yellowColor
} from '../../assets/colors';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    borderWidth: 2,
    borderColor: greenColor,
    borderRadius: 45,
  },
  itmes: {
    justifyContent: 'space-between',
    height: '35%',
    width: '32%',
  },
  itemvalue: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text: {
    color: whiteColor,
    fontFamily: FONT_REGULAR,
    fontSize: 15,
  },
});

const Pie = ({redtitle, yellowtitle, percent, percentred, percentyellow}) => {
  const widthAndHeight = 170;
  const series = [percentred, percentyellow];
  const sliceColor = [redColor, yellowColor];
  const widthAndHeightred = 16;
  const widthAndHeightyellow = 16;
  const red = [100, 0];
  const yellow = [0, 100];
  return (
    <View style={styles.item}>
      <View style={styles.itmes}>
        <View style={styles.itemvalue}>
          <PieChart
            widthAndHeight={widthAndHeightred}
            series={yellow}
            sliceColor={sliceColor}
          />
          <Text style={styles.text}>{percentyellow}{percent}</Text>
          <Text style={styles.text}>{yellowtitle}</Text>
        </View>
        <View style={styles.itemvalue}>
          <PieChart
            widthAndHeight={widthAndHeightyellow}
            series={red}
            sliceColor={sliceColor}
          />
          <Text style={styles.text}>{percentred}{percent}</Text>
          <Text style={styles.text}>{redtitle}</Text>
        </View>
      </View>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
      />
    </View>
  );
};

export default Pie;
