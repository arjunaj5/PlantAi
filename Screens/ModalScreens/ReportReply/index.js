import React from "react";
import { View, Text, ActivityIndicator } from 'react-native';

import styles from "./styles";
const ReportReply = ({selectedReport, fetchedReportReply, hideModal, loading}) => {


  if( loading ){
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#3BA776"
        />
      </View>
    )
  }
  else {
    const detected = selectedReport.detected
    const reply = fetchedReportReply[0]
    const cureName = reply['cure_name']
    const cureDescription = reply['cure_description']
    const diseaseName = reply['name']
    const diseaseDescription = reply['description']
  
    const isDiseaseCorrection = reply['is_correction']
    let heading = (
      <Text style={styles.heading}>{ isDiseaseCorrection ? 'Disease Correction': 'New Cure' }</Text>
    )
    if(! detected){
      heading = (
        <Text style={styles.heading} >Disease Detected</Text>
      )
    }
    const isNewCure = detected && ! isDiseaseCorrection

    const toShow = isNewCure ? (
      <>  
        <View style={{flexDirection: "row", maxWidth: '60%'}} >
            <Text style={styles.text}>Cure: </Text>
            <Text>{reply['name']}</Text> 
        </View>

        <View style={{flexDirection: "row", maxWidth: '60%'}} >
            <Text style={styles.text}>Cure description: </Text>
            <Text>{reply['description']}</Text> 
        </View>
      </>

    ):
    (
      <>
      {diseaseName && <>
      <View style={{flexDirection: "row", maxWidth: '60%'}}>
      <Text style={styles.text}>Disease Name: </Text>
      <Text>{diseaseName}</Text>
      </View>
      </>}
      {diseaseDescription && 
       <>
       <View style={{flexDirection: "row", maxWidth: '60%'}}>
       <Text style={styles.text}>Disease description: </Text>
       <Text>{diseaseDescription}</Text>
       </View>
       </>
      }


       <View style={{flexDirection: "row", maxWidth: '60%'}}>
       <Text style={styles.text}>Cure: </Text>
       <Text>{cureName}</Text>
       </View>
       
       <View style={{flexDirection: "row", maxWidth: '60%'}}>
       <Text style={styles.text}>Cure description: </Text>
       <Text>{cureDescription}</Text>
       </View>
      </>
    )

  return (
    <View style={styles.container} >
      {heading}
      {toShow}


    </View>
  )
}
}

export default ReportReply;