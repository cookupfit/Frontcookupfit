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
import {FONT_REGULAR, greenColor} from '../assets/colors';

const Main = () => {
  const widthAndHeight = 150;
  const series = [75, 25];
  const sliceColor = ['rgb(255, 99, 132)', 'rgb(255, 205, 86)'];
  const widthAndHeightred = 10;
  const widthAndHeightyellow = 10;
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
                  marginBottom: 20,
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
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            flex: 0.7,
            alignItems: 'center',
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
            }}>
            <Image
              style={{height: 46, width: 47}}
              source={require('../../src/assets/img/avtar.png')}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            width: '95%',
            flex: 2.5,
            alignItems: 'center',
          }}>
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
              backgroundColor: 'purple',
            }}>
            {/* Button to open drawer */}

            <View style={styles.data}>
              <View style={styles.pay}>
                <PieChart
                  style={styles.pieChart}
                  widthAndHeight={widthAndHeightred}
                  series={red}
                  sliceColor={sliceColor}
                />
                <Text style={styles.label}>35% Pending</Text>
              </View>
              <View style={[styles.pay, {marginTop: 30}]}>
                <PieChart
                  style={styles.pieChart}
                  widthAndHeight={widthAndHeightyellow}
                  series={yellow}
                  sliceColor={sliceColor}
                />
                <Text style={styles.label}>88% Required</Text>
              </View>
            </View>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'purple',
            width: '95%',
            flex: 2.5,
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 3,
              borderColor: 'green',
              borderRadius: 20,
              width: '95%',
              height: '25%',
              alignItems: 'center',
            }}>
            <Text>members</Text>
            <Text>230</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(45, 231, 44, 1)',
              borderRadius: 20,
              width: '90%',
              height: '35%',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>managment</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '95%',
            flex: 1.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(55, 55, 55, 1)',
              borderRadius: 20,
              width: '40%',
              height: '60%',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>managment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(55, 55, 55, 1)',
              borderRadius: 20,
              width: '40%',
              height: '60%',
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>managment</Text>
          </TouchableOpacity>
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
  chartContainer: {},
  label: {
    color: 'white',
    fontFamily: FONT_REGULAR,
    fontSize: 15,
    marginLeft: 15,
  },
  data: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pay: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  pieChart: {
    marginRight: 5,
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
});

export default Main;
