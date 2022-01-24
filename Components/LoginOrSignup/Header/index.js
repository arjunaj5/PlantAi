import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({status, setStatus}) => {
  return (
      <View style = {styles.banner}>
        <Text style = {styles.text} onPress={() => setStatus('login')}> Login </Text>
        <Text style = {styles.text} onPress = {() => setStatus('signup')}> Signup </Text>
      </View>
  );
}

export default Header;
