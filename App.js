import React from 'react';
import { ToastAndroid, StatusBar, StyleSheet, Text, View, BackHandler } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Containers/Home.js';
import LoginLogout from './Containers/LoginLogoutContainer.js';
import CheckForTrades from './Containers/Trade.js';
import Binders from './Containers/Binders.js';
import WishList from './Containers/WishList.js';
import TradeList from './Containers/TradeList.js';
import Drawer from './Components/Drawer.js';
import Login from './Containers/Login.js';
import ViewBinder from './Components/ViewBinder.js';
import ViewCard from './Components/ViewCard.js';


const MTGApp = DrawerNavigator({
    Binders: { screen: Binders},
    Trade: { screen: CheckForTrades},
    WishList: { screen: WishList},
    TradeList: {screen: TradeList},
    LoginLogout: {screen: LoginLogout},
    ViewBinder: {screen: ViewBinder},
    ViewCard: {screen: ViewCard}
  },
  {
    contentComponent: Drawer,
    drawerWidth: 300,
    backBehavior: 'none'
  }
);

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      wishlist: ["Nothing in the list"],
      username: "Test Username",
      tradelist: ["Nothing in the list"],
      loggedIn: false,
      currentBinder: null,
      currentCard: null,
      binders: [{
        "cards": [
          {
            "quantity": 12,
            "title": "Black Lotus",
            "url": 3,
          },
          {
            "quantity": 12,
            "title": "Camouflage",
            "url": 143,
          }
        ],
        "description": "Green Cards",
        "title": "Binder1",
      }],
    };

    this.setBinder = this.setBinder.bind(this);
    this.setCard = this.setCard.bind(this);
  }

  loginSuccess(token) {
    this.setState({
      loggedIn: true,
      username: token.username,
      binders: token.collection
    });
    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
  }

  logoutSuccess() {
    this.setState({
      loggedIn: false
    });
    ToastAndroid.show('Logout Success', ToastAndroid.SHORT);
  }

  setBinder(binder) {
    this.setState({
      currentBinder: binder
    })
  }

  setCard(card) {
    this.setState({
      currentCard: card
    })
  }



  updatewishlist(str) {
    let newList = this.state.wishlist;
    if(this.state.wishlist[0] === "Nothing in the list") {
      newList = [];
    }
    if(str) {
      newList.push(str);
    }
    this.setState({
      wishlist: newList
    });
  }

  updatetradelist(str) {
    this.setState({
      tradelist: str
    });
  }

// goBack() {
//   console.log("pressed");
// }
//
componentDidMount() {
  StatusBar.setHidden(true);
  //BackHandler.addEventListener('hardwareBackPress', this.goBack);
}
//
// componentWillUnmount() {
//   BackHandler.removeEventListener('hardwareBackPress', this.goBack);
// }

//   async componentWillMount() {
//   await Expo.Font.loadAsync({
//     'Roboto': require('native-base/Fonts/Roboto.ttf'),
//     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//   });
// }


  render() {
    const screenProps = {
      title: "MIM",
      wishlist: this.state.wishlist,
      username: this.state.username,
      tradelist: this.state.tradelist,
      updateWishList: this.updatewishlist.bind(this),
      updateTradeList: this.updatetradelist.bind(this),
      loginSuccess: this.loginSuccess.bind(this),
      logoutSuccess: this.logoutSuccess.bind(this),
      loginStatus: this.state.loggedIn,
      binders: this.state.binders,
      setBinder: this.setBinder,
      setCard: this.setCard,
      currentBinder: this.state.currentBinder,
      currentCard: this.state.currentCard,
      uiTheme: {
        palette: {
            primaryColor: '#546e7a'
        },
        toolbar: {
            container: {
                height: 50,
            },
        },
        actionButton: {
          container: {
            backgroundColor: '#546e7a',
          }
        }
      }
    }
    if(!this.state.loggedIn) {
      return (
        <Login screenProps={screenProps}/>
      )
    }
    return <MTGApp screenProps={screenProps}/>;
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
});
