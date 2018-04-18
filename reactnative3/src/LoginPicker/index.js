import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, Dimensions,Picker } from 'react-native';
import { Container, Content } from 'native-base';  

var deviceWidth = Dimensions.get('window').width;
var width=deviceWidth-50;
const Item = Picker.Item;

export default class LoginPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected_value:'pay2'};
    }

    press(){
        console.log("pressed...");
    }
    render(){
    return(
    <View style={styles.imageContainer}>
        <View style={styles.container}>

            <Picker
                mode="dropdown"
                selectedValue={this.state.selected_value}
                onValueChange={this.press}>
                    <Item label="Net Banking" value="pay1" />
                    <Item label="Debit/Credit Card" value="pay2" />
                    <Item label="Cash on Delivery" value="pay3" />
            </Picker>

            <TouchableHighlight style={ [styles.button ,styles.googleColor]}>
                <Text style={styles.font }> Log in with Google</Text>
            </TouchableHighlight>

            <TouchableHighlight style={ [styles.button ,styles.fbColor]}>
                <Text style={styles.font}>Log in with Facebook</Text>
            </TouchableHighlight>

            <TouchableHighlight style={ [styles.button ,styles.registerColor]}>
                <Text style={styles.font}> Register Now</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor="gray" onPress={this.press}>
                <Text style={[styles.underlineText,styles.font]}> Sign in here </Text>
            </TouchableHighlight>

        </View>
      </View>
    ); 
  }
};

const styles = StyleSheet.create({
  container: {
      width: this.width,
  },
  imageContainer: {

  },
  backgroundImage: {
      
  },
  googleColor: {
      
  },
  fbColor: {
      
  },
  button: {
      
  },
  registerColor: {
      
  },
  underlineText: {
      
  },
  font: {
      
  },  
});