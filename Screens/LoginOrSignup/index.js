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
    handleSignup
  } = useLoginOrSignup(navigation)

  return (
    <DefaultView hideHeader>
      <View style = {styles.container}>
        <Header status = {status} setStatus = {setStatus}/>

        <View style={styles.form}>
          <InputBox placeholder={'User name'} img = {username} value = {userName} setValue = {setUserName} />
            <Text> { userNameError } </Text>
          {status !== 'login' && 
          <InputBox placeholder={'Email Id'} img = {email} value = {emailId} setValue = {setEmailId} /> }
            { status !== 'login' && <Text> { emailIdError } </Text>  }
          <InputBox placeholder={'Password'} img = {passwordimg} value = {password} setValue = {setPassword} />
            <Text> { passwordError } </Text>
          <Button style={styles.button} color = "#3BA776" mode="contained" contentStyle={styles.arrow}
            onPress={() => {
              if(status == 'login')
              handleLogin();
              if(status == 'signup')
              handleSignup();
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
