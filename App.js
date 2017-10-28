import React from 'react';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Containers/Home.js';
import Login from './Containers/Login.js';
import CheckForTrades from './Containers/Trade.js';
import Binders from './Containers/Binders.js';
import WishList from './Containers/WishList.js';
import TradeList from './Containers/TradeList.js';



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


    const HomeScreen = ({ navigation }) => (
      <Home screenProps={screenProps} openDrawer={()=>{navigation.navigate('DrawerOpen')}} />
    );
    const LoginScreen = ({ navigation }) => (
      <Login screenProps={screenProps} openDrawer={()=>{navigation.navigate('DrawerOpen')}} />
    );
    // const TradeScreen = ({ navigation }) => (
    //   <CheckForTrades screenProps={screenProps} openDrawer={()=>{navigation.navigate('DrawerOpen')}} />
    // );
    const BindersScreen = ({ navigation }) => (
      <Binders screenProps={screenProps} openDrawer={()=>{navigation.navigate('DrawerOpen')}} />
    );
    const WishListScreen = ({ navigation }) => (
      <WishList screenProps={screenProps} openDrawer={()=>{navigation.navigate('DrawerOpen')}} />
    );
    const TradeListScreen = ({ navigation }) => (
      <TradeList screenProps={screenProps} openDrawer={()=>{navigation.navigate('DrawerOpen')}} />
    );

    const MTGApp = DrawerNavigator({
      Home: { screen: HomeScreen },
      Login: { screen: LoginScreen},
      Trade: { screen: CheckForTrades},
      Binders: { screen: BindersScreen},
      WishList: { screen: WishListScreen}, //UPDATE TO WishListScreen TO GET MENU BUTTON WORKING (PROPS WON'T WORK IF SO)
      TradeList: {screen: TradeListScreen}
    });

    const screenProps = {
      wishlist: this.state.wishlist,
      username: this.state.username,
      tradelist: this.state.tradelist,
      updateWishList: this.updatewishlist.bind(this),
      updateTradeList: this.updatetradelist.bind(this)
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
