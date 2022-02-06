import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Pressable } from "react-native";



function SearchBar({ img, navigation, query, setQuery, onSearch}) {
  const [placeholder, setPlaceholder] = useState("Search for Plants")
  const handlePress = () => {
    navigation && navigation.navigate('SearchPage', {query})
    if(query !== ""){
      onSearch && onSearch()
    }
    else {
      setPlaceholder("Please enter a plant name")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style = {styles.input}
        placeholder={placeholder}
        placeholderTextColor="#C2B8B8"
        value={query}
        onChangeText={setQuery}
      />
      <View
        style={styles.logo}
      >
        <Pressable
        onPress={handlePress}
        >
          <Image
          source={img}
          style={styles.logoImg}
          />
        </Pressable>
      </View>
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
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    marginTop: 80
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

export default SearchBar;
