import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

import MyButton from './MyButton';

export default function Navbar({ navigation }) {
  console.log(navigation);
  return (
    <View style={styles.navBar}>
      <View style={styles.buttons}>
        <MyButton
          text="Home"
          handlePress={() => {
            Alert.alert('Button pressed! Home');
          }}
        />
        <MyButton
          text="Category"
          handlePress={() => {
            Alert.alert('Button pressed! Category');
          }}
        />
        <MyButton
          text="Cart"
          handlePress={() => {
            Alert.alert('Button pressed! Cart');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 25,
    backgroundColor: '#dbb'
  }
});
