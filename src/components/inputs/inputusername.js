import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { greyColor, FONT_BOLD, whiteColor, blackColor } from '../../assets/colors';

const inputusername = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      style={[
        styles.input,
        { borderColor: isFocused ? blackColor : greyColor },
        { color: isFocused ? blackColor : greyColor },
      ]}
      placeholder={placeholder}
      placeholderTextColor={isFocused ? blackColor : greyColor}  // Change placeholder text color to whiteColor when focused
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 70,
    borderWidth: 1,
    borderRadius: 15,
    paddingRight: 9,
    paddingLeft: 25,
    fontFamily: FONT_BOLD,
    fontSize: 30,
    borderWidth: 4,
    
  },
});

export default inputusername;
