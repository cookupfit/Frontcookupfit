import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { greyColor, FONT_BOLD, blackColor, whiteColor } from '../../assets/colors';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleSecureTextEntry = () => {
    console.log('Input blurred');
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.container, { borderColor: isFocused ? blackColor : greyColor }]}>
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
        secureTextEntry={isSecure}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleSecureTextEntry}
        >
          {/* You can use an eye icon or any other icon for visibility toggle */}
          <Text style={styles.toggleButtonText}>{isSecure ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 70,
    borderWidth: 4,
    borderRadius: 15,
    paddingRight: 9,
    
    
  },
  input: {
    flex: 1,
    paddingLeft: 16,
    fontFamily: FONT_BOLD,
    fontSize: 30,
  },
  toggleButton: {
    padding: 10,
  },
  toggleButtonText: {
    color: greyColor,
    fontSize: 16,
    fontFamily: FONT_BOLD,
  },
});

export default Input;
