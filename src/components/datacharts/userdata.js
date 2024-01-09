import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  FONT_BOLD,
  greenColor,
  whiteColor,
} from '../../assets/colors';



const styles = StyleSheet.create({
  border: {
    width: '90%',
    height: '89%',
    borderWidth: 3,
    borderColor: greenColor,
    borderRadius: 40,
  },
  viewprofile: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgborder: {
    height: 120,
    width: 120,
    marginRight: 5,
    borderWidth: 3,
    borderColor: greenColor,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 107,
    width: 107,
  },
  viewtext: {
    justifyContent: 'space-around',
    height: '55%',
  },
  text: {
    color: whiteColor,
    fontFamily: FONT_BOLD,
    fontSize: 23,
  },
  joined: {
    color: greenColor,
    fontFamily: FONT_BOLD,
    fontSize: 17,
  },
});

const Userdata = ({month, year}) => {



  return (
    <View style={styles.border}>
      <View style={styles.viewprofile}>
        <View style={styles.imgborder}>
          <Image
            style={styles.image}
            source={require('../../assets/img/avtar.png')}
          />
        </View>

        <View style={styles.viewtext}>
          <Text style={styles.text}>Alex Parker</Text>
          <Text style={styles.text}>fitness</Text>
          <Text style={styles.joined}>Joined: {month}/{year}</Text>
        </View>
      </View>
    </View>
  );
};

export default Userdata;
