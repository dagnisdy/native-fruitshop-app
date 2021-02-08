import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import products from '../assets/products.json';

const ProductList = (props) => {
  const images = {
    apples: require('../assets/product_images/fruit_apples.png'),
    bananas: require('../assets/product_images/fruit_bananas.png'),
    clementines: require('../assets/product_images/fruit_clementines.png'),
    coconut: require('../assets/product_images/fruit_coconut.png'),
    lemon: require('../assets/product_images/fruit_lemon.png'),
    mango: require('../assets/product_images/fruit_mango.png'),
    pears: require('../assets/product_images/fruit_pears.png'),
    pineapple: require('../assets/product_images/fruit_pineapple.png'),
    beatroot: require('../assets/product_images/veg_beatroot.png'),
    carrots: require('../assets/product_images/veg_carrots.png'),
    garlic: require('../assets/product_images/veg_garlic.png'),
    leak: require('../assets/product_images/veg_leak.png'),
    mushrooms: require('../assets/product_images/veg_mushrooms.png'),
    oninon: require('../assets/product_images/veg_onion.png'),
    paprika: require('../assets/product_images/veg_paprika.png'),
    potatoes: require('../assets/product_images/veg_potatoes.png')
  };

  const filteredProducts = props.cat ? products.filter((p) => p.category === props.cat) : products;
  const featuredProducts = props.featuredOnly ? products.filter((p) => p.featured === true) : null;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.product}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={images[item.id]} imageStyle={{ borderRadius: 4 }} style={{ height: 50, width: 50 }} />
          <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.name}</Text>
        </View>
        <Text style={{ fontSize: 18, color: '#888' }}>€ {item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.productList}>
      <Text style={styles.title}>{props.featuredOnly ? 'Featured products:' : 'All products'}</Text>
      <FlatList data={props.featuredOnly ? featuredProducts : filteredProducts} renderItem={renderItem} />
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
