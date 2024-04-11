import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class Hdmi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonsV}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={styles.imageButton}
            source={require('../assets/botao-voltar.png')}>
              </Image>
        </TouchableOpacity>
          
        <Text style ={styles.texts}>HDMI (High-Definition Multimedia Interface) é uma tecnologia de conexão por cabo que transmite vídeo e áudio de computadores, celulares e tablets a TVs, monitores ou projetores. A tecnologia pode transmitir conteúdo em resoluções como 4K e 8K.

A primeira versão do HDMI surgiu em 2002. A tecnologia vem sendo atualizada desde então para suportar resoluções maiores e adicionar recursos como o HDR10.</Text>
        <Image
            style={styles.images}
            source={require('../assets/conectar2.png')}></Image>
        <Text style={styles.texts}>O HDMI é um padrão proprietário controlado pela HDMI LA que transmite conteúdo de imagem/som de modo digital e sem compressão. A tecnologia aplica o protocolo TMDS (Transition Minimized Differential Signaling) para prevenir a degradação do sinal durante a transmissão.</Text>
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