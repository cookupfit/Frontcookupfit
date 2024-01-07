import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, View } from 'react-native';
import { blackColor, greenColor, FONT_BOLD, whiteColor } from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUsersGear} from '@fortawesome/free-solid-svg-icons/faUsersGear';
const styles = StyleSheet.create({
  button: {
    
  }
});

const ManagmentButton = ({ title }) => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleButtonClick = () => {
    navigation.navigate('Test');
  };

  return (
    <TouchableOpacity style={{backgroundColor: 'rgba(45, 231, 44, 1)',
    borderRadius: 20,
    width: '90%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center'}}>
            <View style={{
              flexDirection: 'row',
              width: '73%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <FontAwesomeIcon
                icon={faUsersGear}
                style={{color: 'rgba(10, 14, 17, 1)'}}
                size={40}
              />
              <Text
                style={{
                  color: 'rgba(10, 14, 17, 1)',

                  fontFamily: FONT_BOLD,
                  fontSize: 33,
                }}>
                managment
              </Text>
            </View>
          </TouchableOpacity>
  );
};

export default ManagmentButton;
