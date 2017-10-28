import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';
import Login from './Login.js';
import Logout from './Logout.js';

export default class LoginLogoutContainer extends React.Component {
  static navigationOptions = {
    title: 'Login/Logout'
  };

  render() {
    const { screenProps } = this.props;
    const { navigate } = this.props.navigation;
    const isLoggedIn = screenProps.loginStatus;
    return (
      <View>
        {isLoggedIn === false ? (
          <Login screenProps={screenProps} navigate={navigate}/>
        ) : (
          <Logout screenProps={screenProps} navigate={navigate}/>
        )}
      </View>
    );
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
