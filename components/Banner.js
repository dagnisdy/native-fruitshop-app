import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <ImageBackground
        source={require('../assets/banner_2.jpg')}
        imageStyle={{ borderRadius: 10 }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 350,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  image: { height: 350, resizeMode: 'stretch' }
});

export default Banner;
