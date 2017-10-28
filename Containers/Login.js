import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid,TextInput, ToastAndroid} from 'react-native';


export default class Login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <View>
        <Text>Login Page!</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder={"Email"}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder={"Password"}
        />
        <Button title="login" onPress={this.login}></Button>
      </View>
    );
  }

  login = () => {
    const navigate = this.props.navigate;
    const { screenProps } = this.props;

    fetch('https://prod-mtg-app.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    }).then(function(response) {
    let token = JSON.parse(response._bodyText);
    screenProps.loginSuccess();
    navigate('Home');
  }).catch((error) => {
      ToastAndroid.show('Invalid Username or Password', ToastAndroid.SHORT);
  });
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
