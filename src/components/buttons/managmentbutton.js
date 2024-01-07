import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {
  blackColor,
  greenColor,
  FONT_BOLD,
} from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUsersGear} from '@fortawesome/free-solid-svg-icons/faUsersGear';
const styles = StyleSheet.create({
  button: {
    backgroundColor: greenColor,
    borderRadius: 20,
    width: '90%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    flexDirection: 'row',
    width: '73%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: blackColor,
  },
  text: {
    color: blackColor,
    fontFamily: FONT_BOLD,
    fontSize: 33,
  },
});

const ManagmentButton = ({title}) => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleButtonClick = () => {
    navigation.navigate('Mainmanagment');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
      <View style={styles.items}>
        <FontAwesomeIcon icon={faUsersGear} style={styles.icon} size={40} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ManagmentButton;
