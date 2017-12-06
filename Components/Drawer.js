import React from 'react';
import {Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class Drawer extends React.Component {

  navigateToScreen = (route) => () => {
   const navigateAction = NavigationActions.navigate({
     routeName: route
   });
   this.props.navigation.dispatch(navigateAction);
 }

  render() {
    const { screenProps } = this.props;
    return (
      <View style={styles.drawer}>
        { screenProps.loginStatus === true
          ?
            <View style={styles.group}>
              <View style={styles.drawerHeader}></View>
              <View style={styles.listItem}><Text onPress={this.navigateToScreen('Binders')}>Binders</Text></View>
              <View style={styles.listItem}><Text onPress={this.navigateToScreen('Trade')}>Check Trade List</Text></View>
              <View style={styles.listItem}><Text onPress={this.navigateToScreen('LoginLogout')}>Logout</Text></View>
            </View>
          :
            <View>
              <View style={styles.listItem}><Text onPress={this.navigateToScreen('LoginLogout')}>Login</Text></View>
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  drawerHeader: {
    height: 150,
    alignSelf: 'stretch',
    backgroundColor: 'gray'
  },
  group: {
    flex: 1,
    width: 300
  },
  listItem: {
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#E1E2E1',
    alignSelf: 'stretch',
    height: 50
  },
  logout: {
    flex: 1,
    alignItems: 'flex-end',
    width: 300
  }
});
