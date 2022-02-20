import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const DashboardMenu = ( {menu, setMenu, toShow, tabs} ) => {
  return (
    <View style={styles.container} >
      <View style={styles.menu}>
        <Pressable
          onPress={() => setMenu(tabs.tab1)}
          style={[styles.pressable, menu === tabs.tab1 && {backgroundColor: '#fff'} , globalStyles.boxShadow]}
        >
          <Text>{ tabs.tab1 }</Text>
        </Pressable>
        <Pressable
          onPress={() => setMenu(tabs.tab2)}
          style={[styles.pressable, menu === tabs.tab2 && {backgroundColor: '#fff'} , globalStyles.boxShadow]}
        >
          <Text>{ tabs.tab2 }</Text>
        </Pressable>
      </View>


      <ScrollView style={styles.dashboard} contentContainerStyle={{minHeight: '100%'}}>
        {toShow}
      </ScrollView>
    </View>

  )
}
export default DashboardMenu;