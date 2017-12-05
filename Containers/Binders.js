import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableHighlight, ToastAndroid, ScrollView } from 'react-native';
import { Camera, Permissions } from 'expo';
import Navbar from '.././Components/Navbar.js';
import Cam from '.././Components/Camera.js';
import Binder from '.././Components/Binder.js';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';

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
  }

  handleAction(action) {
    // alert(action);
  }

  openDrawer = () => {
    const { navigate } = this.props.navigation;
    const { screenProps } = this.props;
    navigate('DrawerToggle');
  }

  updateBinder(binder) {
    this.setState({
      binderSelected: binder
    })
  }

  binderMap() {
    const { screenProps } = this.props;
    return screenProps.binders.map(function(binder, i){
    return(
      <TouchableHighlight onPress={()=>{this.updateBinder(binder)}} key={i} style={styles.binder}>
        <Text>{binder.title}</Text>
      </TouchableHighlight>
    );
  }, this);
  }

  render() {
    const { hasCameraPermission, binderSelected } = this.state;
    const { screenProps } = this.props;

    if(binderSelected) {
      return (
        <View style={styles.theme}>
          <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
          <Binder screenProps={screenProps} binder={this.state.binderSelected}/>
        </View>
      )
    } else {
      return (
        <ThemeProvider uiTheme={screenProps.uiTheme}>
          <View style={styles.theme}>
            <Navbar screenProps={screenProps} navigate={this.openDrawer.bind(this)} />
            <ScrollView>
              {this.binderMap()}
            </ScrollView>
            <ActionButton
              actions={[
                  { icon: 'add-box', label: 'Add Binder' },
                  { icon: 'delete', label: 'Delete Binders' },
              ]}
              onPress={(action) => {
                this.handleAction(action);
              }}
              transition="speedDial" />
          </View>
        </ThemeProvider>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 300
  },
});
