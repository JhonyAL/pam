import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Home'
import { About } from './src/About'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer >
        <Drawer.Navigator screenOptions={{
          drawerStyle: {
            backgroundColor: '#0f0f0f',
          },
        }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator> 
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
