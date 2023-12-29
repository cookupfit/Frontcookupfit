// Login.js
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import ClickableButton from '../components/buttons/loginButton';
import { whiteColor, FONT_BOLD, greenColor, blackColor } from '../assets/colors';
import Input from '../components/inputs/loginInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: blackColor,
  },
  card: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: greenColor,
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    
  },
  // text is the label login
  label: {
    color: whiteColor,
    fontFamily: FONT_BOLD,
    fontSize: 40,
    
  },
  middle: {
    width: '90%',
  }
});

const Login = ({ onPress, title }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.firstHalf}>
          <Image style={styles.imageStyled} source={require('../../src/assets/img/logo.png')} />
        </View>
        <View style={styles.secondHalf}>
          <View style={styles.card}>
            
            <Text style={styles.label}>login</Text>
            
            <View style={styles.middle} >
            <Input  placeholder="username..."/>
            <Input placeholder="password..."/>
            </View>
            
            <ClickableButton title="login" />
            
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
