import React from 'react'
import { Text, Pressable, View } from 'react-native'

import styles from './styles'

const ActiveTablet = ({ report, setSelectedReport, showAdminModal }) => {
  const detected = report.detected
  const disease = report.disease
  const comments = report.comments
  const handlePress = () => {
    setSelectedReport(report)
    showAdminModal()
    console.log('pressed')
  }

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
    </Pressable>
  )
}

export default ActiveTablet;