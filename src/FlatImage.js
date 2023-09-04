import React from 'react';
import { View, FlatList, Image } from 'react-native';

const images = [
  { source: require('../images/image1.jpg'), width: 100, height: 100 },
  { source: require('../images/image2.jpg'), width: 150, height: 150 },
  { source: require('../images/image3.jpg'), width: 200, height: 200 },
];

const ImageFlatList = () => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ marginVertical: 10, alignSelf: 'center' }}>
          <Image
            source={item.source}
            style={{ width: item.width, height: item.height }}
          />
        </View>
      )}
    />
  );
};

export default ImageFlatList;
