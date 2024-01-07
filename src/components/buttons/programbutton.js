import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {greyColor, whiteColor, FONT_BOLD} from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClipboard} from '@fortawesome/free-solid-svg-icons/faClipboard';
const styles = StyleSheet.create({
  button: {
    backgroundColor: greyColor,
    borderRadius: 20,
    width: '40%',
    height: '60%',
    justifyContent: 'center',
  },
  items: {
    height: '68%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: whiteColor,
  },
  text: {
    color: whiteColor,
    fontFamily: FONT_BOLD,
    fontSize: 20,
  },
});

const ProgramButton = ({title}) => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleButtonClick = () => {
    navigation.navigate('Listprogram');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
      <View style={styles.items}>
        <FontAwesomeIcon icon={faClipboard} style={styles.icon} size={35} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProgramButton;
