import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
  Easing,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  redColor,
  FONT_BOLD,
  yellowColor,
  greenColor,
  greyColor,
} from '../../assets/colors';


const styles = StyleSheet.create({
  
});

const Paimentprice = () => {
    const [isChecked, setChecked] = useState(false);

  const toggleCheckBox = () => {
    setChecked(!isChecked);
  };

  
  return (
    <View style={{
        width: '90%',
        
      }}>
              <View
                style={{
                  height: 70,
                  borderWidth: 1,
                  borderRadius: 15,
                  fontFamily: FONT_BOLD,
                  fontSize: 30,
                  borderWidth: 4,
                  borderColor: greyColor,
                  
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: '100%',
                    
                  }}>
                  <Text style={{color: greyColor,
        fontFamily: FONT_BOLD,
        fontSize: 25,}}>06/23</Text>
                  <Text style={{color: greyColor,
        fontFamily: FONT_BOLD,
        fontSize: 25,}}>200</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    onPress={toggleCheckBox}>
                    <View
                      style={{
                        
                          width: 20,
                          height: 20,
                          marginRight: 8,
                          borderWidth: 2,
                          borderColor: greyColor,
                          borderRadius: 5,
                        
                        
                          backgroundColor: isChecked
                            ? redColor
                            : 'transparent',
                        
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
  );
};

export default Paimentprice;
