import React from 'react'
import { Text, Pressable, View } from 'react-native'

import styles from './styles'

const ActiveTablet = ({active, report, setSelectedReport, showAdminModal }) => {
  const detected = report.detected;
  const disease = report.disease;
  const comments = report.comments;
  const createdAt = report.created_at;
  const modifiedAt = report.modified_at;
  const handlePress = () => {
    if(active){
      setSelectedReport(report)
      showAdminModal()
    }
  }
  const dateShow = (
    active ? `Created on: ${createdAt}` : `Replied on: ${modifiedAt}`
  )

  return(
    <Pressable style={styles.container} onPress={handlePress} >
      <Text style={styles.heading} >{ detected ? 'Disease Not Cured': 'Disease not Detected' }</Text>
      <Text>{ detected && `Disease Name: ${disease}` }</Text>
      <View style={styles.row} >
      <Text>Comments:</Text>
        <View style={styles.comments}>
          <Text>{ comments === '' ? 'No Comments by user': comments } </Text>
        </View>
      </View>
        <Text style={{fontWeight: 'bold'}}>{dateShow}</Text>
    </Pressable>
  )
}

export default ActiveTablet;