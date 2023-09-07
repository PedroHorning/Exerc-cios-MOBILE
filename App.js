import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SistemaNotas from './src/SistemaNotas';
import FlatList from './src/FlatList';
import FlatImage from './src/FlatImage';
import ApiExterna from './src/ApiExterna';

// Componentes para cada tela
function TelaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Sistema Notas"
        onPress={() => navigation.navigate('Tela1')}
      />
      <Button
        title="Ir para API Externa"
        onPress={() => navigation.navigate('Tela2')}
      />
      <Button
        title="Ir para Flat List de cores"
        onPress={() => navigation.navigate('Tela3')}
      />
      <Button
        title="Ir para Flat List de imagens"
        onPress={() => navigation.navigate('Tela4')}
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
       <ApiExterna />
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

function Tela4() {
  return (
    <View style={styles.container}>
       <FlatImage />
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
        <Stack.Screen name="Tela4" component={Tela4} />
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
