import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';



const DetailsPage = ({img, name, description}) => {
  return (

    <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: img}} style={styles.newsPic}/>
            </View>

            <View style={styles.text}>

                <Text style={styles.heading}> { name } </Text>
                <Text style={styles.para}> { description } </Text> 

            </View>
        </View>
  );
}

export default DetailsPage;



