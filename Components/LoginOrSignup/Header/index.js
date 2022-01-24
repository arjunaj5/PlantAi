import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
      <View style = {styles.banner}>
        <Text style = {styles.text}> Login </Text>
        <Text style = {styles.text}> Signup </Text>
      </View>
  );
}

export default Header;
