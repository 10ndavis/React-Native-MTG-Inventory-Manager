import React from 'react';
import {Modal, TouchableHighlight, Image, StyleSheet, AppRegistry, Text, View, Button, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode';

export default class TradeList extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Trade List',
  });


  render() {
    const { screenProps } = this.props;
    const { navigate } = this.props.navigation;
    const tradeListCards = screenProps.tradelist.map((card, index) =>
      <Text key={index}>{card}</Text>
    );
      return (
        <View style={styles.container}>{tradeListCards}</View>
      )
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
  }
});
