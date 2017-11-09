import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableHighlight, ToastAndroid, ScrollView } from 'react-native';


export default class Binder extends React.Component {

  state = {

  };


  render() {
    const { screenProps, binder, updateBinder } = this.props;

    return (
      <View style={styles.binder}>
        <TouchableHighlight onPress={()=>{updateBinder(binder)}}>
          <Text>{binder.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  theme: {
    backgroundColor: "#E1E2E1",
    flex: 1
  },
  binder: {
    flex: 1,
    height: 300,
    padding: 30,
  }

});
