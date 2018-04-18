import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class Settings extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the settings component</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 60,
  }
});

Settings.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};
