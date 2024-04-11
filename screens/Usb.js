import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class Usb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonsV}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={styles.imageButton}
            source={require('../assets/botao-voltar.png')}>
              </Image>
        </TouchableOpacity>
          
        <Text style ={styles.texts}>USB (Universal Serial Bus) é um padrão de conexão por cabo que permite transmissão de dados entre dispositivos variados, como celulares, PCs, TVs e acessórios. As especificações da tecnologia também permitem que uma conexão USB forneça alimentação elétrica ou faça recarga de bateria.

A velocidade de transferência de dados e a capacidade de fornecimento de energia variam de acordo com as versões do USB. A seguir, o Tecnoblog mostra as características de cada uma, como a tecnologia funciona e quais as diferenças entre conectores como USB-A, USB-C e micro-USB.</Text>
        <Image
            style={styles.images}
            source={require('../assets/conectar.webp')}></Image>
        <Text style={styles.texts}>O conector USB conta com fios e pinos para transferência de dados e alimentação elétrica. Isso permite que uma única conexão realize, ao mesmo tempo, tráfego de dados e fornecimento de energia de um dispositivo para o outro.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texts: { 
    fontSize: 18,
    marginRight: 24,
    marginTop: 20
  },
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  images: {
    borderWidth: 2,
    margin: 10,
    width: 300,
    height: 390,
  },
  imageButton: {
    width: 30,
    height: 30
  },
  buttons: {
    width: 10,
    height: 10
  },
  buttonsV: {
    width: 10,
    height: 10,
    marginTop: 24
  }
})