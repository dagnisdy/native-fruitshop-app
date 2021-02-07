import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';

import Banner from '../components/Banner';
import ProductList from '../components/ProductList';

const Home = ({ navigation }) => {
  console.log('home nav', navigation);
  return (
    <View style={styles.contents}>
      <ScrollView>
        <Text style={styles.appTitle}>🍉 DY Fruitshop App</Text>
        <Banner />
        <View style={styles.shopCategory}>
          <ImageBackground
            source={require('../components/images/fruit_bananas.png')}
            imageStyle={{ borderRadius: 4 }}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.shopText}>Shop Fruit</Text>
        </View>
        <View style={styles.shopCategory}>
          <ImageBackground
            source={require('../components/images/veg_carrots.png')}
            imageStyle={{ borderRadius: 4 }}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.shopText}>Shop Vegies</Text>
        </View>
        <View>
          <ProductList />
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
