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


import Paimentprice from '../../components/paiment/paimentprice';
// notification component
import Notification from '../../components/notifaction/notification';
import Userdata from '../../components/datacharts/userdata';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  notifaction: {
    backgroundColor: redColor,
    width: '100%',
    flex: 0.4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileview: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listpaiement: {
    backgroundColor: greenColor,
    width: '100%',
    flex: 1.6,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 70,
    borderWidth: 1,
    borderRadius: 15,
    paddingRight: 9,
    paddingLeft: 25,
    fontFamily: FONT_BOLD,
    fontSize: 30,
    borderWidth: 4,
    borderColor: greyColor,
  },
  v_view: {
    width: '90%',
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 2,
    borderColor: greyColor,
    borderRadius: 5,
  },
});

const Createpaiment = () => {
  const [number, onChangeNumber] = React.useState('');

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const flexAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        Animated.timing(flexAnim, {
          toValue: 0,
          duration: 50, // Adjust the duration for a smoother effect
          easing: Easing.easeInOut, // Use "ease-in-out" easing function
          useNativeDriver: false,
        }).start();
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(flexAnim, {
          toValue: 0.9,
          duration: 1000,
          easing: Easing.easeInOut,
          useNativeDriver: false,
        }).start();
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [flexAnim]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Notification />

      <Animated.View style={[styles.profileview, {flex: flexAnim}]}>
        {!keyboardVisible && <Userdata month="03" year="23" />}
      </Animated.View>

      <View style={styles.listpaiement}>
        <View style={styles.v_view}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="price..."
            placeholderTextColor={greyColor}
            keyboardType="numeric"
          />
        </View>

        <Paimentprice />

        <TouchableOpacity></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Createpaiment;
