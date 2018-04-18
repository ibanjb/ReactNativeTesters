import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    this.setState({ region });
  }
  render() {
    return (
      <MapView style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
      height: '20%',
      width: '20%'
  }
});
