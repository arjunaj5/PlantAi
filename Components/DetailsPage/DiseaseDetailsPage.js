import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';



const DiseaseDetailsPage = ({img, name, description, cure}) => {

  const cureDisplay = (
    cure.length == 0 ? 
    <Text>No Cure Found</Text> : 
    cure.map((element, index) => {
      return  (
        <View key={index}>
        <Text style={styles.heading} >{element.name}</Text>
        <Text style={styles.para} >{element.description} </Text>
        </View>
      )
    })
  )

  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: img}} style={styles.newsPic}/>
      </View>

      <View style={styles.text}>
        <Text style={styles.primaryText}>Disease Name</Text>
        <Text style={styles.heading}>{ name }</Text>
        <Text style={styles.para}>{ description } </Text> 

        
        <Text style={styles.primaryText}>Suggested Cure</Text>
        {cureDisplay}

      </View>
    </ScrollView>
  );
}

export default DiseaseDetailsPage;



