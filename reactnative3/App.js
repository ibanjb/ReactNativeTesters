import React from 'react';
import { StyleSheet, StackNavigator, StatusBar, Platform, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import GoogleMapView from './src/GoogleMap';
import TestComponent from './src/TestComponent';
import LoginPicker from './src/LoginPicker';

/*
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});
*/
export default class App extends React.Component {
  /*
  render() {
    return (        
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" hidden={false}/>
        <Text></Text>
        <Text>Enjoy ! </Text>
        <Text></Text>
        <GoogleMapView />
        <Text>... footer ...</Text>
      </View>      
    );
  }
  */
  render() {
    return <TestComponent />
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
