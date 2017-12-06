import React from 'react';
import {Modal, StyleSheet, Text, View,  } from 'react-native';
import QRCode from 'react-native-qrcode';


export default class ShareModal extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    const { username, binderName, modalVisible, setModalVisible } = this.props;
    let qrObj = {username: username, binder: binderName}
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {setModalVisible(false)}}
          >
         <View style={styles.container}>
          <View>
            <Text>{binderName}</Text>
            <QRCode
              value={JSON.stringify(qrObj)}
              size={200}
              bgColor='black'
              fgColor='white'/>
          </View>
         </View>
        </Modal>
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
  }
});
