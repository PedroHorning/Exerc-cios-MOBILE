import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SistemaNotas from './src/SistemaNotas';
import Navegação from './src/Navegação';
import FlatList from './src/FlatList';

// Componentes para cada tela
function TelaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Sistema Notas"
        onPress={() => navigation.navigate('Tela1')}
      />
      <Button
        title="Ir para Navegação"
        onPress={() => navigation.navigate('Tela2')}
      />
      <Button
        title="Ir para Flat List"
        onPress={() => navigation.navigate('Tela3')}
      />
    </View>
  );
}

function Tela1() {
  return (
    <View style={styles.container}>
      <SistemaNotas />
    </View>
  );
}

function Tela2() {
  return (
    <View style={styles.container}>
       <Navegação />
    </View>
  );
}

function Tela3() {
  return (
    <View style={styles.container}>
       <FlatList />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
