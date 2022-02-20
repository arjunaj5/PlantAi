import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
const ReportsTablet = ({report}) => {
  const status = report.status
  const diseaseName = report.disease
  const detected = report.detected

  return (
    <View style={styles.container}>
      <Text>Report:{detected ? 'Disease Detected' : 'Disease Not Detected' }</Text>
      <Text>{diseaseName}</Text>
      <View style={styles.status} >
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  )
}

export default ReportsTablet