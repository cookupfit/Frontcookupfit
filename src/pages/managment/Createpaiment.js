import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { redColor, FONT_BOLD, blackColor } from '../../assets/colors';


// notifaction component

import Notification from '../../components/notifaction/notification';

import Userdata from '../../components/datacharts/userdata';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  notifaction: {
    backgroundColor: redColor,
    width: '100%',
    flex: 0.4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  profileview: {
    width: '100%',
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listpaiement: {
    backgroundColor: 'purple',
    width: '100%',
    flex: 1.6,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  dh: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 35,
    fontFamily: FONT_BOLD,
    color: blackColor
  }
});

const Createpaiment = () => {
  return (
    <View style={styles.container}>
      <Notification />
      <View style={styles.profileview}>
      <Userdata month="03" year="23"/>
      </View>
      <View style={styles.listpaiement}>
        
      </View>
      
    </View>
  );
};



export default Createpaiment;