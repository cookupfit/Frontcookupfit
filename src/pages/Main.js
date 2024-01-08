import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FONT_REGULAR, FONT_BOLD, greenColor} from '../assets/colors';

// main data charts
import Users from '../components/datacharts/users';
import Pie from '../components/datacharts/piechart';

// main buttons
import ProgramButton from '../components/buttons/programbutton';
import ManagmentButton from '../components/buttons/managmentbutton';
import DietButton from '../components/buttons/dietbutton';

const Main = () => {
  const drawerRef = React.createRef();

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={320}
      drawerPosition="Left"
      renderNavigationView={() => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(45, 231, 44, 1)',
            justifyContent: 'center',
          }}>
          {/* Add your drawer content here */}
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{marginBottom: 70, alignItems: 'center'}}>
              <Image
                style={{
                  height: 130,
                  width: 130,
                  borderWidth: 3,
                  borderColor: 'rgba(10, 14, 17, 1)',
                  borderRadius: 70,
                }}
                source={require('../../src/assets/img/avtar.png')}
              />
              <Text>gymfit</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(55, 55, 55, 1)',
                borderRadius: 20,
                width: '40%',
                height: '10%',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(55, 55, 55, 1)',
                borderRadius: 20,
                width: '40%',
                height: '10%',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>plans</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(55, 55, 55, 1)',
                borderRadius: 20,
                width: '40%',
                height: '10%',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(55, 55, 55, 1)',
                borderRadius: 20,
                width: '40%',
                height: '10%',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}} onPress={closeDrawer}>logout</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      )}>
      {/*view container*/}
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            flex: 0.8,
            alignItems: 'center',
            // yellow is here 🟨
          }}>
          {/* Your existing content */}
          <View
            style={{
              height: 58,
              width: 59,
              marginRight: 5,
              borderWidth: 3,
              borderColor: 'rgba(55, 55, 55, 1)',
              borderRadius: 70,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 5,
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity onPress={openDrawer} style={styles.drawerButton}>
              <View style={styles.line_1}></View>
              <View style={styles.line_2}></View>
              <View style={styles.line_3}></View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 58,
              width: 59,
              marginRight: 5,
              borderWidth: 3,
              borderColor: 'rgba(55, 55, 55, 1)',
              borderRadius: 70,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <Image
              style={{height: 42, width: 42}}
              source={require('../../src/assets/img/avtar.png')}
            />
          </View>
        </View>
        {/*view chart*/}
        <View style={styles.viewchart}>
          <Pie
            yellowtitle="Pending"
            redtitle="Required"
            percentred="190"
            percentyellow="100"
            percent="%"
          />
        </View>
        {/*view middle*/}
        <View style={styles.viewmiddle}>
          {/*users*/}
          <Users title="mumbers" number="245" />
          {/*buttons middle*/}
          <ManagmentButton title="managment" />
        </View>
        {/*buttons end*/}
        <View style={styles.viewend}>
          <ProgramButton title="program" />
          <DietButton title="diet" />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(10, 14, 17, 1)',
  },

  drawerButton: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 70,
    height: 54,
    width: 54,
  },

  line_1: {
    height: 3,
    width: '55%', // Adjust the width of the lines as needed
    backgroundColor: 'white', // You can customize the color
    marginVertical: 1.5,
    borderRadius: 2,
  },
  line_2: {
    height: 3,
    width: '40%', // Adjust the width of the lines as needed
    backgroundColor: 'white', // You can customize the color
    marginVertical: 1.5,
    borderRadius: 2,
  },
  line_3: {
    height: 3,
    width: '25%', // Adjust the width of the lines as needed
    backgroundColor: 'white', // You can customize the color
    marginVertical: 1.5,
    borderRadius: 2,
  },
  viewchart: {
    width: '95%',
    flex: 2.4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewmiddle: {
    width: '95%',
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
  viewend: {
    width: '95%',
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Main;