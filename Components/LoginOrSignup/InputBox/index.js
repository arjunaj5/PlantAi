import React from 'react';
import { View, StyleSheet, TextInput, Image } from "react-native";



function InputBox({placeholder, img, value, setValue}) {
  return (
    <View style={styles.container}>
      <View
        style={styles.logo}
      >
        <Image
        source={img}
        style={styles.logoImg}
        />
      </View>
      <TextInput
        style = {styles.input}
        placeholder={placeholder}
        placeholderTextColor="#C2B8B8"
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 23,
    borderRadius:19,
    borderWidth: 1,
    borderColor:'#C2B8B8',
    justifyContent: 'flex-end'
  },
  input: {
    height: 40,
    width: '80%',
    padding: 10,
  },
  logo: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    width: 30,
    height: 30,
  }
})

export default InputBox;
