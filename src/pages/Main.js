import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {FONT_REGULAR, greenColor} from '../assets/colors';

const Main = () => {
  const widthAndHeight = 200;
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
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          {/* Add your drawer content here */}
          <Text>Drawer Content</Text>
        </View>
      )}>
      <View style={styles.container}>
        <View style={{backgroundColor:'red'}}>
          {/* Your existing content */}
          <TouchableOpacity onPress={openDrawer} style={styles.drawerButton}>
            <Text style={styles.drawerButtonText}>Open Drawer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chartContainer}>
          {/* Button to open drawer */}

          <View style={styles.data}>
            <View style={styles.pay}>
              <PieChart
                style={styles.pieChart}
                widthAndHeight={widthAndHeightred}
                series={red}
                sliceColor={sliceColor}
              />
              <Text style={styles.label}>Payment Pending</Text>
            </View>
            <View style={[styles.pay, {marginTop: 30}]}>
              <PieChart
                style={styles.pieChart}
                widthAndHeight={widthAndHeightyellow}
                series={yellow}
                sliceColor={sliceColor}
              />
              <Text style={styles.label}>Payment Pending</Text>
            </View>
          </View>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
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
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    height: '33%',
    borderWidth: 2,
    borderColor: greenColor,
    borderRadius: 45,
  },
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  drawerButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Main;
