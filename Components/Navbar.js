import React from 'react';
import {Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, StatusBar } from 'react-native';
import { COLOR, Toolbar, ThemeProvider } from 'react-native-material-ui';


export default class Navbar extends React.Component {

  componentWillMount() {

  }

  render() {
    const { screenProps, title } = this.props;
    return (
        <ThemeProvider uiTheme={screenProps.uiTheme}>
          <View>
            <View style={styles.statusBar}></View>
            <Toolbar
              leftElement="menu"
              centerElement={title || "MIM"}
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
  },
  statusBar: {
    backgroundColor: 'black',
    height: StatusBar.currentHeight
  }
});
