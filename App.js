import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allstyles'
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={LoginScreen} options= {{title:'Inicio de sesion'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Pantalla principal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}