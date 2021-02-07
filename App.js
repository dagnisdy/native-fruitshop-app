import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import Home from './components/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Home />
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
