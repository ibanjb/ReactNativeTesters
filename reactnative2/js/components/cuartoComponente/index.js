import MapView from 'react-native-maps';
import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

class CuartoComponente extends Component {
  constructor() {
    super();
    this.state = {
      setState: this.getInitialState()
    };
  }
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
    }

    onRegionChange(region) {
      this.setState({ region });
    }

    render() {
    return (
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
    }
}

export default CuartoComponente;