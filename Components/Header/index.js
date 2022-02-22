import React from "react";
import { View, Image, Pressable, Text} from 'react-native';
import styles from "../Header/styles";
import {useRoute} from '@react-navigation/native';

const Header = ({ navigation, userDetails }) => {
  const user = userDetails && userDetails.user
  
  const route = useRoute();
  const handleMenuPress = () => {
    if(!userDetails){
      navigation.navigate('LoginSignup')
      return
    }
    if(route.name == 'UserDashboard' || route.name == 'HealthDepartmentDashboard')
    return;

    if(user.groups && user.groups[0] == 'HealthDeptAdmin'){
      navigation.navigate('HealthDepartmentDashboard', userDetails)
    }
    else {
      navigation.navigate('UserDashboard', userDetails)
    }
  }
  return(
      <View style = {styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <View style={styles.userMenu}>
                <Text style={styles.userName} >
                 { user &&  user.username.split(' ')[0].length >= 3 ? user.username.split(' ')[0] : user }
                </Text>
              <Pressable
                onPress={handleMenuPress}
              >
                <Image style={styles.menu} source={require('../../assets/images/dashboard.png')} />
              </Pressable>
            </View>
            
      </View>
  );
}

export default Header;
