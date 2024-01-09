// In Button.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  FONT_BOLD,
  greenColor,
  whiteColor,
  greyColor,
} from '../../assets/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    marginTop: 25,
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    width: '90%',
    borderRadius: 19,
    borderColor: greyColor,
    borderWidth: 3,
  },
  text: {
    color: whiteColor,
    fontFamily: FONT_BOLD,
    fontSize: 25,
  },
  create: {
    color: greenColor,
    fontFamily: FONT_BOLD,
    fontSize: 8,
  },
  borderdown: {
    height: 48,
    width: 48,
    borderWidth: 3,
    paddingBottom: 5,
    borderColor: whiteColor,
    borderRadius: 70,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icon: {
    color: greenColor,
  },
});

const Paimentpdf = ({month, year, price, c_month, c_year, date}) => {
  return (
    <View style={styles.view}>
      <View style={styles.border}>
        <Text style={styles.text}>
          {month}/{year}
        </Text>
        <View>
          <Text style={styles.text}>{price}dh</Text>
          <Text style={styles.create}>
            Created : {c_month}/{c_year} {date}
          </Text>
        </View>

        <View style={styles.borderdown}>
          <FontAwesomeIcon icon={faDownload} style={styles.icon} size={25} />
        </View>
      </View>
    </View>
  );
};

export default Paimentpdf;
