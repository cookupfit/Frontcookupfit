import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  redColor,
  FONT_BOLD,
  blackColor,
  greenColor,
  whiteColor,
  greyColor,
} from '../../assets/colors';

// notifaction component

import Notification from '../../components/notifaction/notification';

// user data

import Userdata from '../../components/datacharts/userdata';

// Listpaiement buttons

import Listpaiementbuttons from '../../components/buttons/listpaiementbuttons';

// paiment pdf

import Paimentpdf from '../../components/paiment/paimentpdf';

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
    justifyContent: 'center',
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
  const monthData = {
    january: {
      month: '01',
      year: '23',
      price: '150',
      c_month: '02',
      c_year: '23',
    },
    february: {
      month: '02',
      year: '23',
      price: '180',
      c_month: '03',
      c_year: '23',
    },
    march: {
      month: '03',
      year: '23',
      price: '200',
      c_month: '04',
      c_year: '23',
    },
    april: {
      month: '04',
      year: '23',
      price: '220',
      c_month: '05',
      c_year: '23',
    },
    may: {
      month: '05',
      year: '23',
      price: '250',
      c_month: '06',
      c_year: '23',
    },
    june: {
      month: '06',
      year: '23',
      price: '280',
      c_month: '07',
      c_year: '23',
    },
    july: {
      month: '07',
      year: '23',
      price: '300',
      c_month: '08',
      c_year: '23',
    },
    august: {
      month: '08',
      year: '23',
      price: '320',
      c_month: '09',
      c_year: '23',
    },
    september: {
      month: '09',
      year: '23',
      price: '350',
      c_month: '10',
      c_year: '23',
    },
    october: {
      month: '10',
      year: '23',
      price: '380',
      c_month: '11',
      c_year: '23',
    },
    november: {
      month: '11',
      year: '23',
      price: '400',
      c_month: '12',
      c_year: '23',
    },
    december: {
      month: '12',
      year: '23',
      price: '420',
      c_month: '01',
      c_year: '24',
    },
  };

  return (
    <View style={styles.container}>
      <Notification />
      <View style={styles.profileview}>
        <Userdata month="03" year="23" />
      </View>

      <View style={styles.listpaiement}>
        <ScrollView>
          {Object.keys(monthData).map((month, index) => (
            <Paimentpdf key={index} {...monthData[month]} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.viewend}>
        <Listpaiementbuttons />
      </View>
    </View>
  );
};

// Render the component directly

export default Dtailuserpaiment;
