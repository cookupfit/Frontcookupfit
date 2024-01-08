import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { redColor, FONT_BOLD, blackColor } from '../../assets/colors';

// notifaction component

const styles = StyleSheet.create({
  notifaction: {
    backgroundColor: redColor,
    width: '100%',
    flex: 0.4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
    
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


const Notification = ({ showNotification, title, dh }) => {
  return (
    <>
      {showNotification && (
        <View style={styles.notifaction}>
          <View style={styles.dh}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{dh}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const MyComponent = () => (
    <Notification showNotification={true} title="-600" dh="dh"/>
  );
  
  export default MyComponent;