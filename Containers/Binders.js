import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableOpacit, ToastAndroid, ScrollView } from 'react-native';
import { Camera, Permissions } from 'expo';
import Navbar from '.././Components/Navbar.js';
import Cam from '.././Components/Camera.js';
import ViewBinder from '.././Components/ViewBinder.js';

export default class Binders extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Binders'
  });

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    image: null,
    binderSelected: false
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;

    this.setState({ hasCameraPermission: status === 'granted' });
    if(screenProps.loginStatus === false) {
      navigate('LoginLogout');
    }
  }

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }

  binderMap() {
    const { screenProps } = this.props;
    return screenProps.binders.map(function(binder, i){
    return(
      <View style={styles.binder} key={i}>
        <Text>{binder.name}</Text>
      </View>
    );
  });
  }

  render() {
    const { hasCameraPermission, binderSelected } = this.state;
    const { screenProps } = this.props;

    if(binderSelected) {
      return (
        <View style={styles.theme}>
          <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
          <ViewBinder binder={binderSelected}/>
        </View>
      )
    } else {
      return (
        <View style={styles.theme}>
          <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
          <ScrollView>
            {this.binderMap()}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  theme: {
    backgroundColor: "#E1E2E1",
    flex: 1
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
  },
  binder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 20,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 300
  },
});
