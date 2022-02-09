import React from "react";
import { View , Text, TextInput, Image} from "react-native";
import { Button } from "react-native-paper";


import styles from './styles';
import globalStyles from "../../../globalStyles";





const NotCuredReport = ({selectedtHistoryData, fetchedHistoryData}) => {
  const diseaseName = selectedtHistoryData.disease_name;
  const leafUrl = selectedtHistoryData.leaf_url;
  const plantName = fetchedHistoryData['plant_name']


  return (
    <View style={{height: '90%'}} >
      <Text style={styles.header}>Disease not cured</Text>

      <View style={styles.commentsContainer}>
        <Text>Detected Disease:  <Text style={styles.detailText}> {diseaseName} </Text> </Text>
      </View>

      <View style={styles.commentsContainer}>
        <Text>Name of plant: <Text style={styles.detailText} > {plantName} </Text> </Text>
      </View>

      <View style={styles.commentsContainer}>
        <Text>Comments:</Text>
        <TextInput 
          multiline
          numberOfLines={3}
          style={styles.commentsTextInput}
          maxLength={100}
        />
      </View>

      <View style={styles.container}>
        <Image source={{uri: leafUrl}} style={styles.leafImage} />
      </View>

      <Button
        mode="contained"
        color="#3BA776"
        onPress={() => console.log('Pressed')}
        dark={true}
        style={[globalStyles.button,{alignSelf:"flex-end"}]}
      >
        <Text style={globalStyles.buttonText}> Report </Text>
      </Button>
    </View>
  )
}

export default NotCuredReport;