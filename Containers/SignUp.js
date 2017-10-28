import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid } from 'react-native';


export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp'
  };

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
        <Text>Sign Up!</Text>
        
      </View>
    );
  }

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }

  // login = () => {
  //   const { navigate } = this.props.navigation;
  //   const { screenProps } = this.props;
  //
  //   fetch('https://prod-mtg-app.herokuapp.com/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: '10ndavis10@gmail.com',
  //       password: '1234',
  //     })
  //   }).then(function(response) {
  //   alert(JSON.parse(response._bodyText));
  //   screenProps.loginSuccess();
  //   navigate('Home');
  // })
  // }
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
