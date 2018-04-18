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

class PrimerComponente extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Testing React Native</Text>
        <Text>1</Text>
        <Text>First component</Text>
        <Text></Text>
        <Text>Enjoy!</Text>
      </View>
    );
  }
}

export default PrimerComponente;