import React from 'react';
import {Modal, TouchableHighlight, Image, StyleSheet, AppRegistry, Text, View, Button, TextInput, ToolbarAndroid } from 'react-native';
import QRCode from 'react-native-qrcode';

export default class WishList extends React.Component {

  state = {
    modalVisible: false,
    newCard: ''
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Wish List',
  });

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({text: ''});
  }

  render() {
    const { screenProps } = this.props;
    const wishListCards = screenProps.wishlist.map((card, index) =>
      <Text key={index}>{card}</Text>
    );
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          >
         <View style={styles.container}>
          <View>
            <Text>{`${screenProps.username}'s Wish List`}</Text>
            <QRCode
              value={JSON.stringify(screenProps.wishlist)}
              size={200}
              bgColor='purple'
              fgColor='white'/>

          </View>
         </View>
        </Modal>
        <ToolbarAndroid
          style={styles.toolbar}
          // logo={require('./app-icon.png')}
          title="AwesomeApp"
          actions={[{title: 'Menu', show: 'always'}]}
          onActionSelected={this.props.openDrawer}
           />
        <View>{wishListCards}</View>
        <Button title="share" onPress={() => {
          this.setModalVisible(true)
        }}>Share</Button>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({newCard: text})}
          value={this.state.newCard}
          ref={'newCard'}
        />
        <Button title="addCard" onPress={() => {
          screenProps.updateWishList(this.state.newCard);
          this.clearText('newCard');
        }}>Add Card</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
