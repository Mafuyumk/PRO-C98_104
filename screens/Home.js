import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ScrollView,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Usb')}>
            <Image
              style={styles.images}
              source={require('../assets/cabe-usb.png')}></Image>
            <Text style={styles.texts}> Cabo USB </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Hdmi')}>

            <Image
              style={styles.images}
              source={require('../assets/cabo-hdmi.png')}></Image>
            <Text style={styles.texts}> Cabo HDMI </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Rca')}>

            <Image
              style={styles.images}
              source={require('../assets/cabo-rca.png')}></Image>
            <Text style={styles.texts}> Cabo RCA </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Vga')}>

            <Image
              style={styles.images}
              source={require('../assets/cabo-vga.png')}></Image>
            <Text style={styles.texts}> Cabo VGA </Text>
          </TouchableOpacity>
          <Text style={styles.mine}>Instagram: @Jonh.kyz</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 200,
  },
  images: {
    height: 157,
    width: 193,
  },
  texts: {
    fontSize: 30,
  },
  mine: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 54
  },
});
