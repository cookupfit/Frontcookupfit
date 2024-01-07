// In Button.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {FONT_REGULAR, greyColor, whiteColor} from '../../assets/colors';


const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: greyColor,
    borderRadius: 20,
    width: '95%',
    height: '25%',
    alignItems: 'center',
  },
  text: {
    color: whiteColor,
    fontFamily: FONT_REGULAR,
    fontSize: 23,
  },
  icon: {
    color: whiteColor,
  },
  secondtext: {
    color: whiteColor,
    color: whiteColor,
    fontFamily: FONT_REGULAR,
    fontSize: 22,
  },
});

const Users = ({title, number}) => {
  return (
    <View style={styles.items}>
      <FontAwesomeIcon icon={faUser} style={styles.icon} size={24} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.secondtext}>{number}</Text>
    </View>
  );
};

export default Users;
