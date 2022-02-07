import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import News from '../../Components/Home/News';
import SearchBar from '../../Components/Home/SearchBar';
import Weather from '../../Components/Home/Weather';
import styles from './styles'
import DefaultView from '../../Layouts/DefaultView';

const search = require('../../assets/images/Home/search.png')

const Home = ({ navigation, route }) => {
  const [query, setQuery] = useState('')

  const handlePress = () => {
    if(route.params) {
      navigation.navigate('Disease', route.params.userDetails)
    }
    else
    navigation.navigate('LoginSignup')
  }

  return (
    <DefaultView navigation={navigation} userDetails = {route.params && route.params.userDetails} >
      <View style={styles.container}>
        <SearchBar img={search} navigation={navigation} query={query} setQuery={setQuery} />
        <Weather />
        <News />
        <Button style={styles.button} color = "#3BA776" mode="contained" onPress={handlePress} dark={true}>
          DISEASE DETECTION
        </Button>
      </View>
    </DefaultView>
  )
}


export default Home;
