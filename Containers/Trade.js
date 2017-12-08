import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import Navbar from '.././Components/Navbar.js';

export default class CheckForTrades extends React.Component {

  state = {
    hasCameraPermission: null,
    modalVisible: false
  }

  static navigationOptions = {
    title: 'Check Trade List'
  };

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { screenProps } = this.props;
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={styles.barcode}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    let dataDecoded = JSON.parse(data)

    fetch('https://prod-mtg-app.herokuapp.com/get_binder', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: dataDecoded.username,
        binder: dataDecoded.binderName
      })
    }).then(function(response) {

    }).catch((error) => {
        console.log(error);
        ToastAndroid.show('Server Side Error, Please try again later..', ToastAndroid.SHORT);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcode: {
    flex: 1
  }
});
