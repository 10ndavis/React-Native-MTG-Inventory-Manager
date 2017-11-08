import React from 'react';
import {Modal, TouchableHighlight, Image, StyleSheet, AppRegistry, Text, View, Button, TextInput, ToolbarAndroid } from 'react-native';
import QRCode from 'react-native-qrcode';
import Navbar from '.././Components/Navbar.js';
export default class TradeList extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Trade List',
  });

  componentWillMount() {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    if(screenProps.loginStatus === false) {
      navigate('LoginLogout');
    }
  }

  render() {
    const { screenProps } = this.props;
    const tradeListCards = screenProps.tradelist.map((card, index) =>
      <Text key={index}>{card}</Text>
    );
      return (
        <View>
          <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
          {tradeListCards}
        </View>
      )
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
