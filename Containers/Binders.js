import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';


export default class Binders extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Binders'
  });

  componentWillMount() {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    if(screenProps.loginStatus === false) {
      navigate('LoginLogout');
    }
  }
  
  render() {
    return (
      <View>
        <ToolbarAndroid
          style={styles.toolbar}
          // logo={require('./app-icon.png')}
          title="AwesomeApp"
          actions={[{title: 'Menu', show: 'always'}]}
          onActionSelected={this.openDrawer}
           />
        <Text>Binders Page!</Text>
      </View>
    );
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
