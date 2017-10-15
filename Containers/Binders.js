import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Binders extends React.Component {
  static navigationOptions = {
    title: 'Binders'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Binders Page!</Text>
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
});