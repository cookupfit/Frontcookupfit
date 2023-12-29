import React, { useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet } from 'react-native';
import ClickableButton from '../components/buttons/loginButton';
import { whiteColor, h1_obj, FONT_BOLD, greenColor, blackColor, greyColor } from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  firstHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blackColor,
  },
  imageStyled: {
    width: 250,
    height: 250,
  },
  secondHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blackColor,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteColor,
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '100%',
    backgroundColor: greenColor,
  },
  label: {
    color: whiteColor,
    fontFamily: FONT_BOLD,
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    width: '90%', // Set the width to 100%
    height: 60,
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

const Login = ({ onPress, title }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.firstHalf}>
        <Image style={styles.imageStyled} source={require('../../src/assets/img/logo.png')} />
      </View>
      <View style={styles.secondHalf}>
        <View style={styles.card}>
          <Text style={styles.label}>login</Text>
          <TextInput
            style={styles.input}
            placeholder="username..."
            value={username}
            placeholderTextColor={greyColor}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="password..."
            secureTextEntry={true}
            value={password}
            placeholderTextColor={greyColor}
            onChangeText={(text) => setPassword(text)}
          />
          <ClickableButton title="login" />
        </View>
      </View>
    </View>
  );
};

export default Login;
