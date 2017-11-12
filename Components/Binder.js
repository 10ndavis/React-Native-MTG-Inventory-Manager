import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableHighlight, ToastAndroid, ScrollView } from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';

export default class Binder extends React.Component {

  state = {

  };


  render() {
    const { screenProps, binder, updateBinder } = this.props;

    return (
      <ThemeProvider uiTheme={screenProps.uiTheme}>
        <View style={styles.binder}>
          <Text>{binder.name}</Text>
          <ActionButton />
        </View>
      </ThemeProvider>
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
