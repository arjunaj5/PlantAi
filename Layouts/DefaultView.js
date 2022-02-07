import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '../Components/Header';

const DefaultView = ({children, hideHeader, navigation, userDetails}) => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#D3FFD8',
      alignItems: 'center',
      paddingTop: StatusBar.currentHeight,
      justifyContent: hideHeader ? 'center' : 'flex-start'
    },
  })

  return (
    <View style={styles.root}>
      { !hideHeader && <Header navigation={navigation} userDetails={userDetails} />}
      {children}
    </View>
  );
}



export default DefaultView;
