import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper'

import styles from './styles'
const HistoryTablet = ({history, showReportModal, setSelectedHistoryData}) => {

  const handlePress = () => {
    console.log(history)
    setSelectedHistoryData(history)
    showReportModal()
  }

  return (
    <View style={styles.container}>
        <Image
          style={{height: '100%', width: '20%', borderRadius: 10}}
          source={{uri:history.leaf_url }}
        />
        <Text 
          style={{alignSelf: 'flex-start', marginTop: 10, marginLeft: 5, fontSize: 14, fontWeight: 'bold'}}
        > 
        {history.disease_name ? history.disease_name : 'Healthy' } 
        </Text>
      
        <Button style={styles.button} color = "#3BA776" mode="contained" onPress={handlePress} dark={true}>
          <Text  style={styles.text}>Report</Text>
        </Button>
    </View>
  )
}

export default HistoryTablet