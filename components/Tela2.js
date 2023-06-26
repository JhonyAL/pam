import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import imgR from '../assets/rei-da-chuva.png'

const Card = props => {
    return (
        <View style={styles.card}>
            <Image source={{uri: props.img}} style={{width: 100, height: 100}}/>
            <Text>{props.titulo}</Text>
            <Text>{props.texto}</Text>
        </View>
    )
}

export default function Tela2() {
    const info = [
        {
            img: require('../assets/rei-da-chuva.png'), 
            titulo: 'Rei da Chuva', 
            texto: "Aprimorou a pilotagem no asfalto molhando e mostrou ser um piloto de determinação, garra."
        },
        {
            img: require('../assets/rei-de-monaco.png'),
            titulo: 'Rei de Monaco',
            texto: 'Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.'
        },
        {
            img: require('../assets/silvastone.png'),
            titulo: 'Silvastone',
            texto: 'Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de Silvastone pela imprensa inglesa.'
        },
        {
            img: require('../assets/preparacao.png'),
            titulo: 'Preparação',
            texto: 'Para vencer corridas e campeonatos o piloto precisava ter uma preparaçāo fisica de atleta.'
        },

    ]

  return (
    <View style={styles.container}>
        <ScrollView style={{padding: 10}}>
            <View style={{padding: 15}}>
                <Text style={{color: '#222', fontSize: 20, fontWeight: 700, marginBottom: 20}}>Ayrton Senna</Text>
                <Image 
                    source={require('../assets/foto-capa.jpg')} 
                    style={styles.img} 
                />
                <Text
                    style={{fontSize: 14}}
                >No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
            </View>
            
            {info.map((e) => <Card key={e.img} img={e.img} titulo={e.titulo} texto={e.texto} />)}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 350, 
    height: 200,
    borderRadius: 10,
    marginBottom: 35
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    borderColor: '#222',
    borderWidth: .25,

  }
});
