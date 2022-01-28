import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Header from '../Components/LoginOrSignup/Header'
import InputBox from '../Components/LoginOrSignup/InputBox';

import { Button } from 'react-native-paper';
import DefaultView from '../Layouts/DefaultView';

const email = require('../assets/images/login/email.png')
const username = require('../assets/images/login/username.png')
const passwordimg = require('../assets/images/login/password.png')
const arrow = require('../assets/images/login/arrow.png')

const checkCreds = async (userName, password) => {
  const data = {name:userName, password}
  const response = await fetch('http://127.0.0.1:8000/user/check/', {
    method: 'POST',
   
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return await response.json();
}

function LoginOrSignup( { navigation }) {

  const verifyUser = (userName, password) => {
    const result = checkCreds(userName, password)
    result.then( (res) => {
      const { validated, userExists } = res
      if( validated )
      navigation.navigate('Home') && setWrongPassword(false)
      else if(userExists)
        setWrongPassword(true)
    })
  }

  const [status, setStatus] = useState('login')
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailId, setEmailId] = useState('')
  const [userNameError, setUserNameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [wrongPassword, setWrongPassword] = useState(false)

  useEffect(() => {
    setWrongPassword(false)
    
    if(userName !=="")
    setUserNameError(false)

    if(password !=="")
    setPasswordError(false)
  }, [userName, password])

  return (
    <DefaultView hideHeader>
      <View style = {styles.container}>
        <Header status = {status} setStatus = {setStatus}/>

        <View style={styles.form}>
          <InputBox placeholder={'User name'} img = {username} value = {userName} setValue = {setUsername} />
          <Text>{ userNameError && 'Username required'}</Text>
          {status !== 'login' && 
          <InputBox placeholder={'Email Id'} img = {email} value = {emailId} setValue = {setEmailId} /> }
          <InputBox placeholder={'Password'} img = {passwordimg} value = {password} setValue = {setPassword} />
          <Text>{ passwordError && 'Password required' ||
                  wrongPassword && 'Incorrect password'
          }</Text>

          <Button style={styles.button} color = "#3BA776" mode="contained" contentStyle={styles.arrow}
            onPress={() => {
              if(userName === "")
              setUserNameError(true)
              if (password === "")
              setPasswordError(true)

              if(userNameError == false && passwordError == false)
              verifyUser(userName, password)
            }}
          >
          <Image
            source={arrow}
            />
          </Button>
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
    justifyContent: 'center'
  },
  arrow: {
    width: 100,
    height: 40
  }
});

export default LoginOrSignup;
