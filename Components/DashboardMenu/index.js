import React from "react";
import { Pressable, View, Text } from "react-native";
import { ScrollView } from "react-native-web";
import globalStyles from "../../globalStyles";
import styles from "./styles";

const DashboardMenu = ( {menu, setMenu, toShow} ) => {



  return (
    <ScrollView style={styles.container} contentContainerStyle={{height: '100%'}}>
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


      <View style={styles.dashboard}>
        {toShow}
      </View>
    </ScrollView>

  )
}
export default DashboardMenu;