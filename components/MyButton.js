import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

export default function MyButton(props) {
  return (
    <TouchableOpacity onPress={props.handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff88',
    padding: 10,
    borderRadius: 10,
    margin: 3
  },
  buttonText: {
    color: 'black',
    fontSize: 16
  }
});
