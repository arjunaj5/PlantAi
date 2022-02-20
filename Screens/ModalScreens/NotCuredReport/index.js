import React, { useState } from "react";
import { View , Text, TextInput, Image} from "react-native";
import { Button } from "react-native-paper";


import styles from './styles';
import globalStyles from "../../../globalStyles";

import { sendReport } from "../../UserDashboard/helper";


const NotCuredReport = ({selectedtHistoryData, fetchedHistoryData, hideModal}) => {
  const [comment, setComment] = useState('')
  const diseaseName = selectedtHistoryData.disease_name;
  const leafUrl = selectedtHistoryData.leaf_url;
  const plantName = fetchedHistoryData['plant_name']

  const [loading, setLoading] = useState(false)
  
  const historyId = selectedtHistoryData['id']
  const reportStatus = 'Submitted'

  const handlePress = () => {
    setLoading(true);
    sendReport(historyId, reportStatus, comment).then(response => {
      setLoading(false);
      hideModal()
    })
  }


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
          value={comment}
          onChangeText={setComment}
        />
      </View>

      <View style={styles.container}>
        <Image source={{uri: leafUrl}} style={styles.leafImage} />
      </View>

      <Button
        mode="contained"
        color="#3BA776"
        onPress={handlePress}
        dark={true}
        style={[globalStyles.button,{alignSelf:"flex-end"}]}
        loading={loading}
      >
        <Text style={globalStyles.buttonText}> Report </Text>
      </Button>
    </View>
  )
}

export default NotCuredReport;