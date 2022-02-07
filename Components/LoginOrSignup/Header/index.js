import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({status, setStatus}) => {
  const textStyles = StyleSheet.create({
    textActive: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#3BA776'
    },
    textPassive: {
      fontSize: 19,
      fontWeight: "400",
      color: '#000'
    }
  })
  return (
      <View style = {styles.banner}>
        <Text style = {status === 'login' ? textStyles.textActive: textStyles.textPassive} onPress={() => setStatus('login')}> Login </Text>
        <Text style = {status === 'signup' ? textStyles.textActive: textStyles.textPassive} onPress = {() => setStatus('signup')}> Signup </Text>
      </View>
  );
}

export default Header;
