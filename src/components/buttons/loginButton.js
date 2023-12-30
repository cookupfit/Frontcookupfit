import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { blackColor, greenColor, FONT_BOLD, whiteColor } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  button: {
    backgroundColor: blackColor,
    width: '90%',
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: greenColor,
    fontFamily: FONT_BOLD,
    fontSize: 30,
    paddingTop: 12
  },
});

const ClickableButton = ({ title }) => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleButtonClick = () => {
    navigation.navigate('Main');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ClickableButton;
