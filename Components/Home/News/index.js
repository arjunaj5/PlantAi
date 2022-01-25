import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles'

const newsCover = require('../../../assets/images/Home/news-cover.png')
const News = () => {

  return (
    <View style={styles.container}>
      <Image
        source={newsCover}
        style={styles.newsCover}
      />
      <Text style={styles.newsTopic}>
        News Topic
      </Text>
    </View>
  )
}

export default News;