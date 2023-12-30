// Login.js

// import libraries
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { whiteColor, FONT_BOLD, greenColor, blackColor } from '../assets/colors';

// components import
import ClickableButton from '../components/buttons/loginButton';
import Inputusername from '../components/inputs/inputusername';
import Inputpassword from '../components/inputs/inputpassword';

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

  // card that have clolor green
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
    
  }
});

const Login = ({ onPress, title }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    // KeyboardAvoidingView for risponsive keyboard
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* scroll biew for rispensive */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.firstHalf}>
          <Image style={styles.imageStyled} source={require('../../src/assets/img/logo.png')} />
        </View>
        <View style={styles.secondHalf}>
          <View style={styles.card}>
            
            {/* login text */}
            <Text style={styles.label}>login</Text>
            
            {/* login inputs */}
            <Inputusername
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="username..."/>
            <Inputpassword
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="password..."
            />


            {/* login button */}
            <ClickableButton title="login" />
            
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
