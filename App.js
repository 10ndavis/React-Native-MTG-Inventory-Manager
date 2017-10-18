import React from 'react';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Containers/Home.js';
import Login from './Containers/Login.js';
import CheckForTrades from './Containers/Trade.js';
import Binders from './Containers/Binders.js';
import WishList from './Containers/WishList.js';
import TradeList from './Containers/TradeList.js';

const MTGApp = DrawerNavigator({
  Home: { screen: Home },
  Login: { screen: Login},
  Trade: { screen: CheckForTrades},
  Binders: { screen: Binders},
  WishList: { screen: WishList},
  TradeList: {screen: TradeList}
});

export default class App extends React.Component {

  state = {
      wishlist: ["Nothing in the list"],
      username: "Test Username",
      tradelist: ["Nothing in the list"]
    };

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
    }
    return <MTGApp screenProps={screenProps}/>;
  } //HOW TO PASS PROPS???
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
});
