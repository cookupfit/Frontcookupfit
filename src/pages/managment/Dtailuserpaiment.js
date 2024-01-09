import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {redColor, FONT_BOLD, blackColor, greenColor, whiteColor, greyColor,} from '../../assets/colors';


// notifaction component

import Notification from '../../components/notifaction/notification';

// user data

import Userdata from '../../components/datacharts/userdata';

// Listpaiement buttons

import Listpaiementbuttons from '../../components/buttons/listpaiementbuttons';

// paiment pdf

import Paimentpdf from '../../components/paiment/paimentpdf'

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
      <ScrollView style={styles.listpaiement}>
      
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        <Paimentpdf month="03" year="23" price="200" c_month="04" c_year="23" />
        
      </ScrollView>
      <View style={styles.viewend}>
        <Listpaiementbuttons />
      </View>
    </View>
  );
};

// Render the component directly

export default Dtailuserpaiment;
