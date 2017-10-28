import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class CheckForTrades extends React.Component {

  state = {
    hasCameraPermission: null,
    modalVisible: false
  }

  static navigationOptions = {
    title: 'Check Trade List'
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    if(screenProps.loginStatus === false) {
      navigate('LoginLogout');
    } else {
        this.setState({ hasCameraPermission: status === 'granted' });
    }
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
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    screenProps.updateTradeList(JSON.parse(data));
    navigate('TradeList');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
