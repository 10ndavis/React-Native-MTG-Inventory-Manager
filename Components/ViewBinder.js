import React from 'react';
import { Image, StyleSheet, AppRegistry, Text, View, Button, ToolbarAndroid, TouchableHighlight, ToastAndroid, ScrollView } from 'react-native';
import { ActionButton, ThemeProvider } from 'react-native-material-ui';
import ShareModal from './ShareModal.js';
import Card from './Card.js';
import { NavigationActions } from 'react-navigation';

export default class ViewBinder extends React.Component {

static navigationOptions = ({ navigation }) => ({
  drawerLabel: 'ViewBinder'
});

constructor(props) {
  super(props)
  this.state = {
    modalVisible: false,
  };

  this.setModalVisible = this.setModalVisible.bind(this);
  this.handleAction = this.handleAction.bind(this);
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

navigateToScreen = (route) => {
   const navigateAction = NavigationActions.navigate({
     routeName: route
   });
   this.props.navigation.dispatch(navigateAction);
 }

  cardMap() {
    const { screenProps } = this.props;
    let binder = screenProps.currentBinder;

    return binder.cards.map(function(card, i){
    return(
        <TouchableHighlight onPress={()=>{screenProps.setCard(card); this.navigateToScreen('ViewCard');}} style={styles.cardWrapper} key={i}>
          <View style={styles.card}><Card screenProps={screenProps} card={card} /></View>
        </TouchableHighlight>
      );
    }, this);
  }

  render() {
    let { screenProps, updateBinder } = this.props;
    let { modalVisible } = this.state;
    let binder = screenProps.currentBinder;

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
  cardWrapper: {
    margin: 5,
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
  },
  card: {
    width: 110,
    height: 150,
  }

});
