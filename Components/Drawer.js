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
          ? <View>
              <View style={styles.group}>
                <Text style={styles.listItem} onPress={this.navigateToScreen('Binders')}>Binders</Text>
                <Text style={styles.listItem} onPress={this.navigateToScreen('Trade')}>Check Trade List</Text>
                <Text style={styles.listItem} onPress={this.navigateToScreen('WishList')}>Share Wish List</Text>
              </View>
              <View style={styles.logout}><Text style={styles.listItem} onPress={this.navigateToScreen('LoginLogout')}>Logout</Text></View>
            </View>
          :
            <View>
              <Text style={styles.listItem} onPress={this.navigateToScreen('LoginLogout')}>Login</Text>
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
  },
  group: {
    flex: 1,
    width: 300
  },
  listItem: {
    margin: 10
  },
  logout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: 300
  }
});
