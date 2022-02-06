import React from "react";
import { View, Image, Pressable} from 'react-native';
import styles from "../Header/styles";
import {useRoute} from '@react-navigation/native';

const Header = ({ navigation }) => {
  
  const route = useRoute();
  const handleMenuPress = () => {
    if(route.name != 'UserDashboard')
      navigation.navigate('UserDashboard')
  }
  return(
      <View style = {styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

          <Pressable
            onPress={handleMenuPress}
          >
            <Image style={styles.menu} source={require('../../assets/images/dashboard.png')} />
          </Pressable>
      </View>
  );
}

export default Header;
