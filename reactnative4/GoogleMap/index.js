import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      region: {
        latitude: 41.3874043,
        longitude: 2.169854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    };
  }

  onRegionChange(region) {
    //this.setState({ region });
  }
  render() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  map: {
      height: '100%',
      width: '100%'
  }
});

GoogleMap.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-map' : 'ios-map-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};
