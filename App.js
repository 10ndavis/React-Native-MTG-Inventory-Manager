import React from 'react';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Containers/Home.js';
import Login from './Containers/Login.js';
import Trade from './Containers/Trade.js';
import Binders from './Containers/Binders.js';

const MTGApp = DrawerNavigator({
  Home: { screen: Home },
  Login: { screen: Login},
  Trade: { screen: Trade},
  Binders: { screen: Binders}
});

export default class App extends React.Component {

  componentDidMount() {
     StatusBar.setHidden(true);
  }

  render() {
    return <MTGApp />;
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
});
