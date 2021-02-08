import React from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, ImageBackground, Pressable } from 'react-native';

import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const Home = ({ navigation }) => {
  return (
    <View style={styles.contents}>
      <ScrollView>
        <Banner />
        <Pressable
          style={styles.shopCategory}
          onPress={() => {
            navigation.navigate('🍊 Category Page', { thisCat: 'Fruit' });
          }}
        >
          <ImageBackground
            source={require('../assets/product_images/fruit_bananas.png')}
            imageStyle={{ borderRadius: 4 }}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.shopText}>Shop Fruit</Text>
        </Pressable>
        <Pressable
          style={styles.shopCategory}
          onPress={() => {
            navigation.navigate('🍊 Category Page', { thisCat: 'Vegetables' });
          }}
        >
          <ImageBackground
            source={require('../assets/product_images/veg_carrots.png')}
            imageStyle={{ borderRadius: 4 }}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.shopText}>Shop Vegies</Text>
        </Pressable>
        <View>
          <ProductList featuredOnly={true} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  appTitle: {
    marginTop: 10,
    fontSize: 22,
    textAlign: 'center',
    color: '#766',
    fontWeight: 'bold'
  },
  shopCategory: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  shopText: { marginLeft: 20, fontSize: 20, color: '#888', fontWeight: '500' }
});

export default Home;
