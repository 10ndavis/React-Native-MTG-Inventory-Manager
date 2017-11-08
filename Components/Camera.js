import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableOpacit, ToastAndroid } from 'react-native';
import { Camera, Permissions } from 'expo';


export default class Cam extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Binders'
  });

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    image: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({
        base64: true
      });
      ToastAndroid.show('Photo taken, please wait..', ToastAndroid.SHORT);
      this.setState({image: photo.uri});
      fetch('https://prod-mtg-app.herokuapp.com/imageSearch', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_string: photo.base64
        })
      }).then(function(response) {
        alert(response._bodyText);
    }).catch((error) => {
        ToastAndroid.show('Server Side Error, Please try again later..', ToastAndroid.SHORT);
    });
    }
  };

    render() {
      const { hasCameraPermission, cameraOpen } = this.state;
      const { screenProps } = this.props;

      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }} />
      );
    }
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
