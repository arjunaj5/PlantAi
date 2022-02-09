import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const DashboardMenu = ( {menu, setMenu, toShow} ) => {



  return (
    <View style={styles.container} >
      <View style={styles.menu}>
        <Pressable
          onPress={() => setMenu('history')}
          style={[styles.pressable, menu === 'history' && {backgroundColor: '#fff'} , globalStyles.boxShadow]}
        >
          <Text> History </Text>
        </Pressable>
        <Pressable
          onPress={() => setMenu('reports')}
          style={[styles.pressable, menu === 'reports' && {backgroundColor: '#fff'} , globalStyles.boxShadow]}
        >
          <Text> Reports </Text>
        </Pressable>
      </View>


      <ScrollView style={styles.dashboard} contentContainerStyle={{minHeight: '100%'}}>
        {toShow}
      </ScrollView>
    </View>

  )
}
export default DashboardMenu;