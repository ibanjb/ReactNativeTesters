import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TaskList from './TaskList';

export default class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        todos: [{
          'task': 'Learn React Native',
        }, {
          'task': 'Learn Redux',
        }, {
          'task': 'Learn Native Base',
        }],
    };
  }

  onAddStarted() {
    console.log('on add started');
  }

  render() {
    return (
        <TaskList onAddStarted={this.onAddStarted.bind(this)} todos={this.state.todos} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 60,
  }
});

Calendar.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};