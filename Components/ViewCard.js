import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, ScrollView, Dimensions} from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';
import Card from './Card.js';

export default class ViewCard extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'ViewCard'
  });

  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    const { screenProps } = this.props;
    let card = screenProps.currentCard;

    Image.getSize(card.url, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height;
      const maxWidth = Dimensions.get('window').width;

      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      this.setState({ width: srcWidth * ratio, height: srcHeight * ratio });
    }, error => {
      console.log('error:', error);
    });
  }

  render() {
    const { screenProps } = this.props;
    let card = screenProps.currentCard;

    return (
      <View style={styles.canvas}>
        <Image
           style={{ width: this.state.width, height: this.state.height }}
           source={{ uri: card.url }}
           resizeMode="cover"
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    canvas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
