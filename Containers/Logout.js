import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';


export default class Logout extends React.Component {

  render() {
    return (
      <View>
        <Text>Logout Page!</Text>
        <Button title="logout" onPress={this.logout}></Button>
      </View>
    );
  }

  logout = () => {
    const { screenProps } = this.props;
    screenProps.logoutSuccess();
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
