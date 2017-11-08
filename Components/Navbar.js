import React from 'react';
import {Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';
import { COLOR, Toolbar, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
  palette: {
      primaryColor: '#546e7a',
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};

export default class Navbar extends React.Component {

  componentWillMount() {
    const { navigate } = this.props.navigate;
    const { screenProps } = this.props;
    if(screenProps.loginStatus === false) {
      navigate('LoginLogout');
    }
  }

  render() {
    const { screenProps } = this.props;
    return (
        <ThemeProvider uiTheme={uiTheme}>
          <View>
            <Toolbar
              leftElement="menu"
              centerElement="MIM"
              onLeftElementPress={this.props.navigate}
            />
          </View>
        </ThemeProvider>
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
    backgroundColor: '#4883da'
    }
});
