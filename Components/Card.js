import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, ScrollView} from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';

export default class Card extends React.Component {

  render() {
    const { screenProps, card } = this.props;
    return (
        <View style={styles.card}>
          <Image
            style={{flex: 1}}
            source={{uri: card.url }}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1
  }
});
