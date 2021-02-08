import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import Navbar from './components/Navbar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="🍉 DY Fruitshop App">
            <Stack.Screen name="🍉 DY Fruitshop App" component={HomeScreen} />
            <Stack.Screen name="🍊 Category Page" component={CategoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <Navbar />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
