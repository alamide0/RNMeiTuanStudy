/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { AppRegistry,} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScene from './src/scene/Home/HomeScene';
import RootScene from './src/RootScene'

export default class PO extends PureComponent {
  render() {
    return (
      <RootScene/>
    );
  }
}


// const Simple = StackNavigator(
//     {
//         Home: {screen: HomeScene},
//     }
// );


AppRegistry.registerComponent('PO', () => PO);
