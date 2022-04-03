import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from './styles'
const ReportsTablet = ({report, showReportResultModal, setSelectedReport}) => {
  const status = report.status
  const diseaseName = report.disease
  const detected = report.detected

  const borderStyle = status === 'replied' &&{
    borderWidth: 2,
    borderColor: '#3BA776'
  }
  const handlePress = () =>{
    setSelectedReport(report)
    status === 'replied' && showReportResultModal()
  }
  return (
    <Pressable style={[styles.container, borderStyle]} onPress={handlePress}>
      <Text>Report: {detected ? 'Disease Not Cured' : 'Disease Not Detected' }</Text>
      <Text>{detected && 'Detected Disease: ' + diseaseName }</Text>
      <View style={styles.status}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </Pressable>
  )
}

export default ReportsTablet 