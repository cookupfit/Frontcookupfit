import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text, Alert } from 'react-native';
// otherFile.js
import {blackColor, greenColor, greyColor, whiteColor, redColor, yellowColor,} from '../../assets/colors';
console.log(blackColor);
// Create a styled button component
const StyledButton = styled(TouchableOpacity)`
  background-color: ${greenColor};
  padding: 5% 0%;
  margin: 10px;
  border-radius: 40px;
  width: 100%;
  align-items: center;
  
`;

// Create a styled text component for the button label
const ButtonText = styled(Text)`
  color: white;
  font-family: 'Marlin Geo SQ Slant';
  font-size: 40px;
`;

// Functional component for the clickable button
const ClickableButton = ({ title }) => {
  const handleButtonClick = () => {
    Alert.alert('Button Clicked!', 'You pressed the button.');
  };

  return (
    <StyledButton onPress={handleButtonClick}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

export default ClickableButton;
