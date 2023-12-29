// InputComponent.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { greyColor, FONT_BOLD } from '../../assets/colors';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      placeholderTextColor={greyColor}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 70,
    borderColor: greyColor,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 15,

    paddingRight: 9, // Adjust padding as needed

    paddingLeft: 25,
    fontFamily: FONT_BOLD,
    fontSize: 30,
    borderWidth: 4,
  },
});

export default Input;
