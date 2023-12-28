// In Button.js
import React from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Test = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test Screen</Text>

      {/* single buttons */}
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Main"
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />

      {/* managment buttons */}
      <Button
        title="Createpaiment"
        onPress={() => navigation.navigate('Createpaiment')}
      />
      <Button
        title="Createuser"
        onPress={() => navigation.navigate('Createuser')}
      />
      <Button
        title="Dtailuserpaiment"
        onPress={() => navigation.navigate('Dtailuserpaiment')}
      />
      <Button
        title="Edituser"
        onPress={() => navigation.navigate('Edituser')}
      />
      <Button
        title="Mainmanagment"
        onPress={() => navigation.navigate('Mainmanagment')}
      />

      {/* plans buttons */}
      <Button
        title="Createplan"
        onPress={() => navigation.navigate('Createplan')}
      />
      <Button
        title="Editplan"
        onPress={() => navigation.navigate('Editplan')}
      />
      <Button
        title="Listplan"
        onPress={() => navigation.navigate('Listplan')}
      />

      {/* program buttons */}
      <Button
        title="Createprogram"
        onPress={() => navigation.navigate('Createprogram')}
      />
      <Button
        title="Editprogram"
        onPress={() => navigation.navigate('Editprogram')}
      />
      <Button
        title="Listprogram"
        onPress={() => navigation.navigate('Listprogram')}
      />

    </View>
    
  );
}



export default Test;