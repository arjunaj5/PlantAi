import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";

function InputBox({placeholder}) {
  return (
      <TextInput
        style = {styles.input}
        placeholder={placeholder}
        placeholderTextColor="#C2B8B8" 
      />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    marginTop: 23,
    borderWidth: 1,
    borderColor:'#C2B8B8',
    borderRadius:19,
    padding: 10,
  }
})

export default InputBox;
