import React from 'react'
import { Text, Pressable } from 'react-native'

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
      <Text>{ detected ? 'Disease Not Cured': 'Disease not Detected' }</Text>
      <Text>{ detected && `Disease Name: ${disease}` }</Text>
      <Text>Comments: { comments === '' ? 'No Comments by user': comments }</Text>
    </Pressable>
  )
}

export default ActiveTablet;