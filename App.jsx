// import libraries

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// test pages
import Test from './src/pages/Test';


// navigation component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
      <Stack.Screen  name="Test" component={Test} options={{headerShown: true,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;