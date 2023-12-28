// In Button.js
import React , {useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image,TextInput, Button  } from 'react-native';
import ClickableButton from '../components/buttons/loginButton';
import styled from 'styled-components/native';
import {blackColor, greenColor, greyColor, whiteColor, redColor, yellowColor, border_raduis , h1_obj} from '../assets/colors';

const Login = ({ onPress, title }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic using username and password
    // You can call the onPress prop here if needed
    onPress(username, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.firsthalf}>
        <Image style={styles.image} source={require('../../src/assets/img/logo.png')} />
      </View>
      <View style={styles.secondhalf}>
        <View style={styles.card}>
          <Text style={styles.label}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username ..."
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password ..."
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <ClickableButton title="Login" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  firsthalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  secondhalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 400,
    height: 400,
  },
  card: {
    backgroundColor: greenColor,
    borderRadius: 30,
    padding: 20,
    elevation: 1, // Add elevation for shadow (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 1 }, // Shadow offset (iOS)
    shadowOpacity: 0.8, // Shadow opacity (iOS)
    shadowRadius: 2, // Shadow radius (iOS)
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust width as needed
    height :'100%',
  },
  label: {
    fontSize: h1_obj.fontSize,
    fontWeight : h1_obj.fontWeight,
    fontStyle : h1_obj.fontStyle,
    color : whiteColor
  },
  input: {
    width: '100%', // Set width to 100% of the parent container
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
};
export default Login;