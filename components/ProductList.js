import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import products from '../products.json';

const ProductList = (props) => {
  const images = {
    apples: require('./images/fruit_apples.png'),
    bananas: require('./images/fruit_bananas.png'),
    clementines: require('./images/fruit_clementines.png'),
    coconut: require('./images/fruit_coconut.png'),
    lemon: require('./images/fruit_lemon.png'),
    mango: require('./images/fruit_mango.png'),
    pears: require('./images/fruit_pears.png'),
    pineapple: require('./images/fruit_pineapple.png'),
    beatroot: require('./images/veg_beatroot.png'),
    carrots: require('./images/veg_carrots.png'),
    garlic: require('./images/veg_garlic.png'),
    leak: require('./images/veg_leak.png'),
    mushrooms: require('./images/veg_mushrooms.png'),
    oninon: require('./images/veg_onion.png'),
    paprika: require('./images/veg_paprika.png'),
    potatoes: require('./images/veg_potatoes.png')
  };

  const filteredProducts = props.category
    ? products.filter((item) => item.category === props.category)
    : products;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.product}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={images[item.id]}
            imageStyle={{ borderRadius: 4 }}
            style={{ height: 50, width: 50 }}
          />
          <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.name}</Text>
        </View>
        <Text style={{ fontSize: 18, color: '#888' }}>€ {item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.productList}>
      <Text style={styles.title}>All products:</Text>
      <FlatList data={filteredProducts} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, color: '#aaa', marginBottom: 6 },
  productList: {
    backgroundColor: 'white',
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginTop: 5,
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderRadius: 5
  }
});

export default ProductList;
