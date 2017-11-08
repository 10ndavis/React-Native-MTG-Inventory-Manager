import React from 'react';
import {Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';
import Navbar from '.././Components/Navbar.js'

export default class Home extends React.Component {


  static navigationOptions = {
    title: 'Home'
  };

  componentWillMount() {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    if(screenProps.loginStatus === false) {
      navigate('LoginLogout');
    }
  }

  render() {
    const { screenProps } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
        <Button title="test" onPress={this.test}>Test</Button>
      </View>
    );
  }

  test = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('View Binder')
  }

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }
}



const styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#4883da',
    }
});
