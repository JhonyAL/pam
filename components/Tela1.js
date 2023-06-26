import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, Image } from 'react-native';

export default function Tela1() {
  return (
    <ImageBackground
        source={require('../assets/fundo.jpg')}
        style={styles.container}
        blurRadius={2.5}
    >   
        <Image source={require('../assets/foto-capa.jpg')} 
            style={styles.img} 
        />
        <View style={styles.textBox}>
            <Text style={{color: '#eee', fontSize: 20, fontWeight: 700, marginBottom: 20}}>Ayrton Senna</Text>
            <Text style={{color: '#ccc'}}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    padding: 0
  },
  img: {
    width: 250, 
    height: 250, 
    borderRadius: '50%', 
    marginBottom: 50, 
    borderColor: '#222', 
    borderWidth: 2.5
  },
  textBox: {
    width: 350,
    height: 150,
    padding: 10,
    backgroundColor: '#222222de',
    borderRadius: 20,
    textAlign: 'center'
  }
});
