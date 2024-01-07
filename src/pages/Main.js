import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {FONT_REGULAR, FONT_BOLD, greenColor} from '../assets/colors';


// main data charts 
import Users from '../components/datacharts/users';
// main buttons
import ProgramButton from '../components/buttons/programbutton';
import ManagmentButton from '../components/buttons/managmentbutton';
import DietButton from '../components/buttons/dietbutton';

const Main = () => {
  const widthAndHeight = 170;
  const series = [75, 25];
  const sliceColor = ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'];
  const widthAndHeightred = 16;
  const widthAndHeightyellow = 16;
  const red = [100, 0];
  const yellow = [0, 100];

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
              <Text style={{color: 'white', textAlign: 'center'}}>logout</Text>
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
        <View
          style={{
            // red is here 🟥
            width: '95%',
            flex: 2.4,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          {/*chart need to be fix*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
              height: '80%',
              borderWidth: 2,
              borderColor: greenColor,
              borderRadius: 45,
            }}>
            {/* Button to open drawer */}

            <View
              style={{
                justifyContent: 'space-between',
                height: '35%',
                width: '32%',
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <PieChart
                  style={styles.pieChart}
                  widthAndHeight={widthAndHeightred}
                  series={yellow}
                  sliceColor={sliceColor}
                />
                <Text style={styles.label}>35%</Text>
                <Text style={styles.label}>Pending</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <PieChart
                  style={styles.pieChart}
                  widthAndHeight={widthAndHeightyellow}
                  series={red}
                  sliceColor={sliceColor}
                />
                <Text style={styles.label}>88%</Text>
                <Text style={styles.label}>Required</Text>
              </View>
            </View>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
            />
          </View>
        </View>
        {/*middle view*/}
        <View
          style={styles.midlleview}>
            {/*users*/}
          <Users title="mumbers" number="245"/>
          {/*buttons middle*/}
          <ManagmentButton title="managment" />
        </View>
        <View style={styles.button}>
          {/*buttons ends*/}
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

  label: {
    color: 'white',
    fontFamily: FONT_REGULAR,
    fontSize: 15,
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
  midlleview: {
    width: '95%',
            flex: 2.5,
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-around',
  },
  button: {
    width: '95%',
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Main;
