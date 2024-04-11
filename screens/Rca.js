import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class Rca extends Component {
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
          A conexão RCA foi desenvolvida para conexões de aparelhos de rádio e
          som, especificamente para reprodutores mono em amplificadores. Com o
          tempo, a conexão ganhou força pela simplicidade em integrar
          equipamentos dos mais diversos, como caixas de som, receptores,
          reprodutores como fonógrafos. Assim, o RCA se tornou padrão para
          dispositivos de áudio.
        </Text>
        <Image
          style={styles.images}
          source={require('../assets/conectar3.png')}></Image>
        <Text style={styles.texts}>
          Com o tempo, a indústria padronizou o cabo RCA em cores e conexões
          distintas:
        </Text>

        <Text style={styles.texts}>
          1 - Vídeo componente: A mais básica, usa conectores amarelo (vídeo),
          branco (áudio esquerdo estéreo ou áudio mono) e vermelho (áudio
          direito estéreo);
        </Text>

        <Text style={styles.texts}>
          2 - Som surround: Usa conectores verde (som central), azul (surround
          esquerdo), cinza (surround direito), marrom (surround traseiro
          esquerdo), bege (surround traseiro direito) e roxo (subwoofer);
        </Text>

        <Text style={styles.texts}>
          3 - Vídeo composto: Usa conectores verde (Y, brilho), azul (Pb, diferença
          entre azul e brilho) e vermelho (Pr, diferença entre vermelho e
          brilho);
        </Text>

        <Text style={styles.texts}>
          4 - S/PFID: cabo para transmissão de áudio digital; nos conectores RCA é
          identificado pela cor laranja.
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
    width: 280,
    height: 250,
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
