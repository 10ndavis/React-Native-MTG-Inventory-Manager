import React from 'react';
import {ToastAndroid, StatusBar, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Containers/Home.js';
import LoginLogout from './Containers/LoginLogoutContainer.js';
import CheckForTrades from './Containers/Trade.js';
import Binders from './Containers/Binders.js';
import WishList from './Containers/WishList.js';
import TradeList from './Containers/TradeList.js';

const MTGApp = DrawerNavigator({
  Home: { screen: Home },
  Trade: { screen: CheckForTrades},
  Binders: { screen: Binders},
  WishList: { screen: WishList},
  TradeList: {screen: TradeList},
  LoginLogout: {screen: LoginLogout}
});

export default class App extends React.Component {

  state = {
      wishlist: ["Nothing in the list"],
      username: "Test Username",
      tradelist: ["Nothing in the list"],
      loggedIn: true
    };

  loginSuccess() {
    this.setState({
      loggedIn: true
    });
    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
  }

  logoutSuccess() {
    this.setState({
      loggedIn: false
    });
    ToastAndroid.show('Logout Success', ToastAndroid.SHORT);
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

  componentDidMount() {
     StatusBar.setHidden(true);
  }


  render() {
    const screenProps = {
      wishlist: this.state.wishlist,
      username: this.state.username,
      tradelist: this.state.tradelist,
      updateWishList: this.updatewishlist.bind(this),
      updateTradeList: this.updatetradelist.bind(this),
      loginSuccess: this.loginSuccess.bind(this),
      logoutSuccess: this.logoutSuccess.bind(this),
      loginStatus: this.state.loggedIn
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
