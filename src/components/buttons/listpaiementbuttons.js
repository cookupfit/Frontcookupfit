import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {redColor, FONT_BOLD, blackColor, greenColor, whiteColor,} from '../../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

// fontawesome icons

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';




const styles = StyleSheet.create({
    view: {
        flexDirection: 'row', justifyContent: 'space-around', width: '90%', height: '58%'
    },
button: {
    backgroundColor: greenColor, borderRadius: 15 , width: '23%', justifyContent: 'center', alignItems: 'center',
},
icon : {
    color: blackColor,
}
});
// navigation.navigate('Edituser');
const Listpaiementbuttons = () => {

    const navigation = useNavigation();

    const Mainmanagment = () => {
        
        navigation.navigate('Mainmanagment');
      };

    const Edituser = () => {
        
        navigation.navigate('Edituser');
      };
    const Createpaiment = () => {
        
        navigation.navigate('Createpaiment');
      };

  return (

        <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={Mainmanagment}>
      <FontAwesomeIcon icon={faArrowLeft} style={styles.icon} size={35} />
      
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Edituser}>
      <FontAwesomeIcon icon={faPenToSquare} style={styles.icon} size={35} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Createpaiment}>
      <FontAwesomeIcon icon={faPlus} style={styles.icon} size={35} />
      </TouchableOpacity>
      </View>

  );
};

// Render the component directly

export default Listpaiementbuttons;
