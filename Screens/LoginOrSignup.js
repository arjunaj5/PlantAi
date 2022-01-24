import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from '../Components/LoginOrSignup/Header'
import InputBox from '../Components/LoginOrSignup/InputBox';

function LoginOrSignup() {
  return <View style = {styles.container}>
    <Header />
    <View style={styles.form}>
      <InputBox placeholder={'User name'} />
      <InputBox placeholder={'Email Id'} />
      <InputBox placeholder={'Password'} />
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    paddingVertical: 10,
    borderRadius: 19,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    width: '90%'
    },
  form: {
    paddingVertical: 25
  }
});

export default LoginOrSignup;
