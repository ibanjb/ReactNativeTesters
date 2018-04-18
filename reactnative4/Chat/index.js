import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';

export default class Chat extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the chat component</Text>
        <Text style={styles.signin}> 
            Sign in with Facebook 
            <Zocial
                name='facebook'
                size={26}
                style={{ color: '#e91e63', backgroundColor:'transparent'  }}
            />
        </Text>
        
        <Text style={styles.signin}> 
            Sign in with Google+ 
            <Zocial
                name='google'
                size={26}
                style={{ color: '#e91e63' }}
            />
        </Text>
        <Text style={styles.signin}> 
            Sign in with Twitter 
            <Zocial
                name='twitter'
                size={26}
                style={{ color: '#e91e63' }}
            />
        </Text>
        
        <Text style={styles.signin}> 
            Sign in with Skype 
            <Zocial
                name='skype'
                size={26}
                style={{ color: '#e91e63' }}
            />
        </Text>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 60,
      backgroundColor: '#E7E7E7',
  },
  signin: {
      marginTop: 20,
      marginLeft: 20,
      backgroundColor: '#E7E7E7',
      width: '50%',
  },
  signinFacebook: {
      marginTop: 20,
      marginLeft: 20,
      backgroundColor: '#E7E7E7',
      width: '50%',
  }
});

Chat.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};