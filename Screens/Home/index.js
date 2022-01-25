import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import News from '../../Components/Home/News';
import SearchBar from '../../Components/Home/SearchBar';
import Weather from '../../Components/Home/Weather';
import styles from './styles'

const search = require('../../assets/images/Home/search.png')

const Home = () => {

  return (
    <View style={styles.container}>
      <SearchBar placeholder={'Search for Plants'} img={search} />
      <Weather />
      <News />
      <Button style={styles.button} color = "#3BA776" mode="contained" onPress={() => console.log('Pressed')} dark={true}>
        DISEASE DETECTION
      </Button>
    </View>
  )
}


export default Home;
