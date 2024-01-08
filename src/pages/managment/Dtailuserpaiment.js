import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { redColor, FONT_BOLD, blackColor } from '../../assets/colors';

// notifaction component

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
    backgroundColor: 'yellow',
    width: '100%',
    flex: 0.9,
  },
  listpaiement: {
    backgroundColor: 'purple',
    width: '100%',
    flex: 1.6,
  },
  viewend: {
    backgroundColor: 'blue',
    width: '100%',
    flex: 0.5,
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

const Dtailuserpaiment = ({ showNotification, title, dh }) => {
  return (
    <View style={styles.container}>
      {showNotification && (
        <View style={styles.notifaction}>
          <View style={styles.dh}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{dh}</Text>
          </View>
        </View>
      )}
      <View style={styles.profileview}>
        <Text>-600</Text>
      </View>
      <View style={styles.listpaiement}>
        <Text>-600</Text>
      </View>
      <View style={styles.viewend}>
        <Text>-600</Text>
      </View>
    </View>
  );
};

// Render the component directly
const MyComponent = () => (
  <Dtailuserpaiment showNotification={true} title="-600" dh="dh"/>
);

export default MyComponent;
