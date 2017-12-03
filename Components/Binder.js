import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableHighlight, ToastAndroid, ScrollView } from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';
import Card from './Card.js';


export default class Binder extends React.Component {

  state = {
    cardSelected: null
  };


  selectCard(card) {
    this.setState({
      cardSelected: card
    })
  }

  cardMap() {
    const { binder, screenProps } = this.props;
    return binder.cards.map(function(card, i){
    return(
        <TouchableHighlight onPress={()=>{this.selectCard(card)}} style={styles.card} key={i}>
          <View><Card screenProps={screenProps} card={card} /></View>
        </TouchableHighlight>
      );
    }, this);
  }

  render() {
    const { screenProps, binder, updateBinder } = this.props;
    const { cardSelected } = this.state;

    if(cardSelected) {
      return (
        <View style={styles.selectedCard}>
          <Image
            style={{flex:1, height: undefined, width: undefined}}
            source={{uri:cardSelected.url}}
          />
        </View>
      )
    } else {
      return (
        <ThemeProvider uiTheme={screenProps.uiTheme}>
          <View style={styles.binder}>
            <Text>{binder.title}</Text>
              <ScrollView>
                <View style={styles.cardListOuter}>
                  <View style={styles.cardList}>
                    {this.cardMap()}
                  </View>
                </View>
              </ScrollView>
            <ActionButton />
          </View>
        </ThemeProvider>
      )
    }


  }
}

const styles = StyleSheet.create({
  theme: {
    backgroundColor: "#E1E2E1",
    flex: 1,
  },
  binder: {
    flex: 1,
    height: 300,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  cardListOuter: {

  },
  card: {
    margin: 5
  },
  selectedCard: {
    flex: 1,
  }

});
