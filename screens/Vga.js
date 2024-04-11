import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class Vga extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonsV}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Image
            style={styles.imageButton}
            source={require('../assets/botao-voltar.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.texts}>
          O cabo VGA, também conhecido como D-Sub, é responsável por conectar e
          transmitir imagens de um computador para um monitor ou televisão.
          Funciona de uma forma analógica, portanto não transmite áudios
        </Text>
        <Image
          style={styles.images}
          source={require('../assets/conectar4.png')}></Image>
        <Text style={styles.texts}>
          O cabo VGA, também conhecido como D-Sub, é responsável por conectar e
          transmitir imagens de um computador para um monitor ou televisão.
          Funciona de uma forma analógica, portanto não transmite áudios. Como
          configurar dois monitores no computador É composto por versões macho e
          fêmea, na qual a primeira possui 15 pequenos pinos, que são encaixados
          da segunda. Alguns modelos ainda são acompanhados de dois parafusos
          rosqueáveis, que auxiliam no encaixe.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texts: {
    fontSize: 18,
    marginRight: 24,
    marginTop: 20,
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
    height: 30,
  },
  buttons: {
    width: 10,
    height: 10,
  },
  buttonsV: {
    width: 10,
    height: 10,
    marginTop: 24
  }
});
