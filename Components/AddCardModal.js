import React from 'react';
import { Modal, StyleSheet, Text, View, Button } from 'react-native';
import QRCode from 'react-native-qrcode';


export default class AddCardModal extends React.Component {


  render() {
    const { binderName, modalVisible, setModalVisible } = this.props;
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
            <Text>Add card here</Text>
            <Button title="Scan card" onPress={()=>{console.log('pressed scan')}}>Scan Card</Button>
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
