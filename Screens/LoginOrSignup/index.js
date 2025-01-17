import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from '../../Components/LoginOrSignup/Header'
import InputBox from '../../Components/LoginOrSignup/InputBox';

import { Button } from 'react-native-paper';
import DefaultView from '../../Layouts/DefaultView';

const email = require('../../assets/images/login/email.png')
const username = require('../../assets/images/login/username.png')
const passwordimg = require('../../assets/images/login/password.png')
const arrow = require('../../assets/images/login/arrow.png')


// Login and signup hook
import useLoginOrSignup from './CustomHooks/useLoginOrSignup';

function LoginOrSignup( { navigation }) {

  const {
    userName,
    setUserName,
    emailId,
    setEmailId,
    password,
    setPassword,
    status,
    setStatus,

    userNameError,
    emailIdError,
    passwordError,

    handleLogin,
    handleSignup,
    loading
  } = useLoginOrSignup(navigation)
  
  return (
    <DefaultView hideHeader>
      <Text style={styles.primaryText} > You have to login or signup first</Text>
      <View style = {styles.container}>
        <Header status = {status} setStatus = {setStatus}/>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <InputBox placeholder={'User name'} img = {username} value = {userName} setValue = {setUserName} status={status}  />
            <Text style={styles.errorText}> { userNameError } </Text>
          </View>

          <View style={styles.inputGroup}>
            {status !== 'login' && 
            <InputBox placeholder={'Email Id'} img = {email} value = {emailId} setValue = {setEmailId} status={status}  /> }
            { status !== 'login' && <Text style={styles.errorText}> { emailIdError } </Text>  }
          </View>
          
          <View style={styles.inputGroup}>
            <InputBox placeholder={'Password'} img = {passwordimg} value = {password} setValue = {setPassword} status={status} isPassword={true} />
            <Text style={styles.errorText}> { passwordError } </Text>
          </View>

          <Button style={styles.button} color = "#3BA776" mode="contained" loading={loading} icon={arrow} dark={true} contentStyle={styles.arrow} 
          labelStyle={{fontSize: 35,}}
            onPress={() => {
              if(status == 'login')
              handleLogin();
              if(status == 'signup')
              handleSignup();
            }}
          />
        </View>
      </View>
    </DefaultView>
  );
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
    width: '90%',
    },
  form: {
    paddingVertical: 25,
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 150,
    height: 40,
    fontSize: 20,
  },
  primaryText: {
    color: '#3BA776',
    marginBottom: 10,
    fontSize: 20
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    padding: 2,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  inputGroup: {
    alignItems: 'flex-start'
  }

});

export default LoginOrSignup;
