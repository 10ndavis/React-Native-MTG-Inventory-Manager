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
      <View style={styles.theme}>
        <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
      </View>
    );
  }

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }
}



const styles = StyleSheet.create({
  theme: {
    backgroundColor: "#E1E2E1",
    flex: 1
  }
});
