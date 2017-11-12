import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, ScrollView} from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';

export default class Card extends React.Component {

  state = {

  };

  render() {
    const { screenProps, card } = this.props;

    return (
      <ThemeProvider uiTheme={screenProps.uiTheme}>
        <View style={styles.card}>
          <Image
            style={{flex:1, height: undefined, width: undefined}}
            source={{uri:'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + card.url + '&type=card'}}
          />
        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    height: 150,
  }
});
