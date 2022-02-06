import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';



const DetailsPage = ({img, name, description}) => {
  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri: img}} style={styles.newsPic}/>
            </View>

            <View style={styles.text}>

                <Text style={styles.heading}> { name } </Text>
                <Text style={styles.para}> { description } </Text> 

            </View>
        </ScrollView>
  );
}

export default DetailsPage;



