import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Weather = () => {

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}> 25 ℃ </Text>
      </View>

      <View style={styles.innerContainer}>

      </View>
    </View>
  );
}

export default Weather;