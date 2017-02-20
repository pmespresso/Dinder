/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Container,
  Text
} from 'react-native';
import AppContainer from './app/AppContainer';

export default class dinder extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

AppRegistry.registerComponent('dinder', () => dinder);
