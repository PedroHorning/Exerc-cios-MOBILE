import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState(null);

  const calcularMedia = () => {
    if (nota1 && nota2) {
      const nota1Float = parseFloat(nota1);
      const nota2Float = parseFloat(nota2);
      const calculoMedia = (nota1Float + nota2Float) / 2;
      setMedia(calculoMedia.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Média</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a primeira nota"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a segunda nota"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />
      <Button title="Calcular Média" onPress={calcularMedia} />
      {media && <Text style={styles.result}>Média: {media}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  result: {
    marginTop: 16,
    fontSize: 18,
  },
});

export default App;

