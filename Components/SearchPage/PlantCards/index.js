import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import globalStyles from '../../../globalStyles';
import styles from './styles';


const PlantCards = ({name, description, image_url, navigation}) => {
  const handlePress = () => {
    navigation.navigate('PlantPage', {image_url, name, description})
  }
  return (
      <Pressable onPress={handlePress} style={[styles.card, globalStyles.boxShadow]}>
          <View style={styles.imageView}>
              <Image style={styles.image} source={ {uri: image_url} } />
          </View>
          <View style={styles.cardtext}>
              <Text style={styles.heading}> {name} </Text>
              <Text style={styles.para}> { description.slice(0, 40) + ' ............' } </Text>
          </View>
      </Pressable> 
  )
}

export default PlantCards;