import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text, Alert } from 'react-native';
// otherFile.js
import {blackColor, greenColor, greyColor, whiteColor, redColor, yellowColor, FONT_BOLD} from '../../assets/colors';
console.log(blackColor);
// Create a styled button component
const StyledButton = styled(TouchableOpacity)`
  background-color: ${blackColor};
  padding: 4% 0%;
  margin: 10px;
  border-radius: 40px;
  width: 87%;
  align-items: center;
`;

// Create a styled text component for the button label
const ButtonText = styled(Text)`
  color: ${greenColor};
  font-family: ${FONT_BOLD};
  font-size: 30px;
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
