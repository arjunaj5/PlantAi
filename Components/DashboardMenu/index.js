import React from "react";
import { Pressable, View, Text } from "react-native";
import globalStyles from "../../globalStyles";
import HistoryTablet from "./HistoryTablet";
import ReportsTablet from "./ReportsTablet";
import styles from "./styles";

const DashboardMenu = ( {menu, setMenu} ) => {

  let toShow
  if(menu === 'history') {
  toShow = ( <>
    <HistoryTablet/>
    <HistoryTablet/>
    <HistoryTablet/>
    </>
  );
  }
  else {
    toShow = (
      <>
      <ReportsTablet/>
      <ReportsTablet/>
      <ReportsTablet/>
      </>
    )
  }

  return (
    <View style={styles.container}>
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
    </View>

  )
}
export default DashboardMenu;