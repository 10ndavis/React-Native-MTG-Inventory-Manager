import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class ViewBinder extends React.Component {

  state = {
  }

  static navigationOptions = {
    title: 'View Binder'
  };

  render() {
    const { screenProps } = this.props;
      return (
        <View style={{ flex: 1 }}>
          <Text>{this.props.binder}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
