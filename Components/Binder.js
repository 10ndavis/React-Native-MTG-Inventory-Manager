import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableHighlight, ToastAndroid, ScrollView } from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';
import ShareModal from './ShareModal.js';
import Card from './Card.js';


export default class Binder extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    cardSelected: null,
    modalVisible: false,
  };

  this.setModalVisible = this.setModalVisible.bind(this);
  this.handleAction = this.handleAction.bind(this);
}

selectCard(card) {
  this.setState({
    cardSelected: card
  })
}

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}


handleAction(action) {

  switch(action) {
    case 'share':
        this.setModalVisible(true);
        break;
    case "test":
        //doSomething
        break;
    default:
        // alert(action);
  }
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
    let { screenProps, binder, updateBinder } = this.props;
    let { cardSelected, modalVisible } = this.state;

    if(cardSelected) {
      return (
        <View style={styles.selectedCardWrapper}>
          <Image
            style={styles.selectedCard}
            source={{uri:cardSelected.url}}
            resizeMode="contain"
          />
        </View>
      )
    } else {
      return (
        <ThemeProvider uiTheme={screenProps.uiTheme}>
          <View style={styles.binder}>
            <ShareModal binderName={binder.title} username={"test"} modalVisible={modalVisible} setModalVisible={this.setModalVisible} />
              <ScrollView>
                <View style={styles.cardListOuter}>
                  <View style={styles.cardList}>
                    {this.cardMap()}
                  </View>
                </View>
              </ScrollView>
            <ActionButton
              actions={[
                  { icon: 'favorite', label: 'Favorite' },
                  { icon: 'share', label: 'Share' },
                  { icon: 'add-box', label: 'Add Cards' },
                  { icon: 'remove-circle', label: 'Remove Cards' },
                  { icon: 'delete', label: 'Delete Binder' },
              ]}
              onPress={(action) => {
                this.handleAction(action);
              }}
              transition="speedDial" />
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
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white'
  },
  selectedCardWrapper: {
    flex: 1,
    backgroundColor: 'white'
  }

});
