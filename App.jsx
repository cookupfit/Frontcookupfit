// import libraries

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// test pages
import Test from './src/pages/Test';

// import main pages
import Login from './src/pages/Login';
import Main from './src/pages/Main';
import Profile from './src/pages/Profile';
import Settings from './src/pages/Settings';
import Diets from './src/pages/Diets';


// import managment pages
import Createpaiment from './src/pages/managment/Createpaiment';
import Createuser from './src/pages/managment/Createuser';
import Dtailuserpaiment from './src/pages/managment/Dtailuserpaiment';
import Edituser from './src/pages/managment/Edituser';
import Mainmanagment from './src/pages/managment/Mainmanagment';

// import plans pages
import Createplan from './src/pages/plans/Createplan';
import Editplan from './src/pages/plans/Editplan';
import Listplan from './src/pages/plans/Listplan';

// import programs pages
import Createprogram from './src/pages/programs/Createprogram';
import Editprogram from './src/pages/programs/Editprogram';
import Listprogram from './src/pages/programs/Listprogram';

// navigation component

const Stack = createNativeStackNavigator();
// initialRouteName is the base page
function App() {
  return (
    <NavigationContainer>
      {/* test component for initialRouteName */}
      <Stack.Navigator  initialRouteName="Dtailuserpaiment">

      {/* main components */}
      <Stack.Screen  name="Test" component={Test} options={{headerShown: false,}}/>
      <Stack.Screen  name="Login" component={Login} options={{headerShown: false,}}/>
      <Stack.Screen  name="Main" component={Main} options={{headerShown: false,}}/>
      <Stack.Screen  name="Profile" component={Profile} options={{headerShown: true,}}/>
      <Stack.Screen  name="Settings" component={Settings} options={{headerShown: true,}}/>
      <Stack.Screen  name="Diets" component={Diets} options={{headerShown: true,}}/>
      
      {/* managment components */}
      <Stack.Screen  name="Createpaiment" component={Createpaiment} options={{headerShown: true,}}/>
      <Stack.Screen  name="Createuser" component={Createuser} options={{headerShown: true,}}/>
      <Stack.Screen  name="Dtailuserpaiment" component={Dtailuserpaiment} options={{headerShown: false,}}/>
      <Stack.Screen  name="Edituser" component={Edituser} options={{headerShown: true,}}/>
      <Stack.Screen  name="Mainmanagment" component={Mainmanagment} options={{headerShown: true,}}/>
      
      {/* plans components */}
      <Stack.Screen  name="Createplan" component={Createplan} options={{headerShown: true,}}/>
      <Stack.Screen  name="Editplan" component={Editplan} options={{headerShown: true,}}/>
      <Stack.Screen  name="Listplan" component={Listplan} options={{headerShown: true,}}/>

      {/* programs components */}
      <Stack.Screen  name="Createprogram" component={Createprogram} options={{headerShown: true,}}/>
      <Stack.Screen  name="Editprogram" component={Editprogram} options={{headerShown: true,}}/>
      <Stack.Screen  name="Listprogram" component={Listprogram} options={{headerShown: true,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;