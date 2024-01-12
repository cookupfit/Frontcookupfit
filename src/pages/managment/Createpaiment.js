import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { redColor, FONT_BOLD, blackColor } from '../../assets/colors';

// notification component
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
    justifyContent: 'center',
  },
  profileview: {
    width: '100%',
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listpaiement: {
    backgroundColor: 'purple',
    width: '100%',
    flex: 1.6,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: FONT_BOLD,
    color: blackColor,
  },
  // checkbox
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'white', // You can change the border color as needed
    borderRadius: 5,
  },
});

const Createpaiment = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckBox = () => {
    setChecked(!isChecked);
  };

  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
      <Notification />
      <View style={styles.profileview}>
        <Userdata month="03" year="23" />
      </View>
      <View style={styles.listpaiement}>
        {/*
        <TouchableOpacity
          style={styles.checkBoxContainer}
          onPress={toggleCheckBox}
        >
          <View style={[styles.checkBox, { backgroundColor: isChecked ? 'rgba(45, 231, 44, 1)' : 'transparent' }]} />
        </TouchableOpacity>
        */}
        
      <TextInput
        style={{borderWidth: 1, borderRadius: 10}}
        onChangeText={onChangeText}
        value={text}
      />
        <View>

        </View>
      </View>
    </View>
  );
};

export default Createpaiment;
