import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {redColor, FONT_BOLD, blackColor, greenColor, whiteColor,} from '../../assets/colors';


// notifaction component

import Notification from '../../components/notifaction/notification';

// user data

import Userdata from '../../components/datacharts/userdata';

// Listpaiement buttons

import Listpaiementbuttons from '../../components/buttons/listpaiementbuttons';

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
    justifyContent: 'center',
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
  },
  viewend: {
    width: '100%',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

const Dtailuserpaiment = () => {
  return (
    <View style={styles.container}>
      <Notification />
      <View style={styles.profileview}>
        <Userdata month="03" year="23"/>
      </View>
      <View style={styles.listpaiement}>

      </View>
      <View style={styles.viewend}>
        <Listpaiementbuttons />
      </View>
    </View>
  );
};

// Render the component directly

export default Dtailuserpaiment;
