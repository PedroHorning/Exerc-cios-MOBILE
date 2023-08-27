import React from 'react';
import { View, FlatList } from 'react-native';

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const ColorFlatList = () => {
  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item} // Usar keyExtractor corretamente
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: item,
            width: 100,
            height: 100,
            marginVertical: 10, // Espaçamento vertical entre os itens
            alignSelf: 'center', // Centralizar os itens horizontalmente
          }}
        />
      )}
    />
  );
};

export default ColorFlatList;
