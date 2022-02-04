import React from "react";
import { Pressable, View, Text } from "react-native";
import styles from "./styles";

const DashboardMenu = () => {

  return (
    <View style={styles.container}>
    <Pressable
      onPress={() => setMenu('history')}
      style={styles.pressable}
    >
      <Text> History </Text>
    </Pressable>
    <Pressable
      onPress={() => setMenu('reports')}
      style={styles.pressable}
    >
      <Text> Reports </Text>
    </Pressable>
  </View>
  )
}
export default DashboardMenu;