//IMPORT
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

//Formatações
const Estilos = {
    principal:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    botao:{
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20,
      elevation: 8
    },

    textoBotao:{
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold'
    }
};

const gerarNovaFrase = () =>{

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 13)

  //frases
  var frases = Array();
  frases[0] = 'Estou sempre alegre.Essa é a melhor maneira de viver!';
  frases[1] = 'O tempo dura bastante para aqueles que sabem aproveitá-lo';
  frases[2] = 'Se você encontrar um caminho sem obstáculos, você está no caminho errado!';
  frases[3] = 'Não existe um caminho para a felicidade. A felicidade que é o caminho!';
  frases[4] = 'Você nunca sabe a força que tem. Até que precise dela!';
  frases[5] = 'Deixe pra trás o que não te leva pra frente.!';
  frases[6] = 'O segredo é ter fé em Deus!';
  frases[7] = 'Falo nada, só observo!';
  frases[8] = 'Obrigado Deus pelo dia de hoje!';
  frases[9] = 'As crises não afastam os amigos. Apenas selecionam!';
  frases[10] = 'Se for pra desistir, desista de ser fraco!';
  frases[11] = 'Insista, persista e nunca desista!';
  frases[12] = 'Jonathan Lacerda ssss!';

  var fraseEscolhida = frases [ numeroAleatorio ];

  Alert.alert(fraseEscolhida);

}


//CRIAR COMPONENTE
const App = () => {

  const {principal, botao, textoBotao} = Estilos;

  return(
    <View style={principal}>

      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>

        <Text style={textoBotao}>Nova Frase </Text>
      </TouchableOpacity>


    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frase', () => App);
