import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, FontAwesome } from 'react-native-vector-icons'
import { NavigationContainer } from '@react-navigation/native';

// *********** IMPORTANDO TELAS ************
import Tela1 from './components/Tela1.js'
import Tela2 from './components/Tela2.js'
import Tela3 from './components/Tela3.js'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#c4461c",
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: "#eecb00",
          tabBarInactiveTintColor: "#222"
        }}
      >
        <Tab.Screen
          name="Ínicio" 
          component={Tela1}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#eecb00',
            },
            headerTintColor: '#222',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Sobre" 
          component={Tela2} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="questioncircleo" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#eecb00',
            },
            headerTintColor: '#222',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen 
          name="Vitórias" 
          component={Tela3} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="trophy" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#eecb00',
            },
            headerTintColor: '#222',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}