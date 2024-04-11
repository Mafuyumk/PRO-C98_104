import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './screens/Home';
import Usb from './screens/Usb';
import Hdmi from './screens/Hdmi';
import Vga from './screens/Vga';
import Rca from './screens/Rca';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home: Home,
  Usb: Usb,
  Hdmi: Hdmi,
  Vga: Vga,
  Rca: Rca,
});

const AppContainer = createAppContainer(AppNavigator);