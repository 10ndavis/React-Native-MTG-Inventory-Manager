import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid,TextInput, ToastAndroid} from 'react-native';


export default class Login extends React.Component {

  state = {
    email: "",
    password: "",
    signUp: false,
    username: null
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.signUp === false ?
          <View style={styles.inputGroup}>
            <Text>Sign In</Text>
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
            <Button title="signUp" onPress={this.showSignUp}></Button>
          </View>
          :
          <View style={styles.inputGroup}>
            <Text>Sign Up</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              placeholder={"Username"}
            />
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
          </View>}

      </View>
    );
  }

  showSignUp = () => {
    this.setState({signUp: true})
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
        username: this.state.username
      })
    }).then(function(response) {
    let token = JSON.parse(response._bodyText);
    if(token === "False") {
      ToastAndroid.show('Invalid Email or Password', ToastAndroid.SHORT);
    } else {
      screenProps.loginSuccess();
      navigate('Home');
    }
  }).catch((error) => {
      ToastAndroid.show('Server Side Error, Please try again later..', ToastAndroid.SHORT);
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#4883da',
  },
  inputGroup: {
    width: '80%',

  },
});
