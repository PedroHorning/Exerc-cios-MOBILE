import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

// Função para buscar informações da API externa SWAPI
async function buscarInformacoesSWAPI(valorDeReferencia, setData, setError) {
  try {
    const response = await fetch(`https://swapi.dev/api/${valorDeReferencia}`);
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados da API');
    }

    const data = await response.json();
    setData(data);
    setError(null);
  } catch (error) {
    setError('Erro ao buscar informações da API');
  }
}

function ApiExterna() {
  const [valorDeReferencia, setValorDeReferencia] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const buscarDados = () => {
    buscarInformacoesSWAPI(valorDeReferencia, setData, setError);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor de referência (ex: people/1)"
        value={valorDeReferencia}
        onChangeText={setValorDeReferencia}
      />
      <Button title="Buscar" onPress={buscarDados} />
      {error ? <Text>{error}</Text> : null}
      {data ? (
        <Text style={styles.resultado}>{JSON.stringify(data, null, 2)}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultado: {
    marginTop: 10,
    fontFamily: 'monospace',
  },
});

export default ApiExterna;
