
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Escudo">
        <Drawer.Screen name="Escudo" component={EscudoScreen} />
        <Drawer.Screen name="Jogadores" component={JogadoresScreen} />
        <Drawer.Screen name="Títulos" component={TitulosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}