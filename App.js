import React from 'react';
import { ToastAndroid, StatusBar, StyleSheet, Text, View, BackHandler, AsyncStorage } from 'react-native';
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
      lastScannedBinder: null,
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
    this.setLastScanned = this.setLastScanned.bind(this);
  }

  async loginSuccess(token) {
    this.setState({
      loggedIn: true,
      username: token.username,
      binders: token.collection
    });
    await AsyncStorage.setItem('token', JSON.stringify(token));
    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
  }

  async logoutSuccess() {
    this.setState({
      loggedIn: false
    });
    await AsyncStorage.removeItem('token');
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

  setLastScanned(binder) {
    this.setState({
      lastScannedBinder: binder
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

  async componentDidMount() {
    try {
      const token = JSON.parse(await AsyncStorage.getItem('token'));
      if (token !== null){
        this.setState({
          loggedIn: true,
          username: token.username,
          binders: token.collection
        });
        console.log(token);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      setLastScanned: this.setLastScanned,
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
