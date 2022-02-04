import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

import styles from './styles'
const HistoryTablet = () => {

  return (
    <View style={styles.container}>
        <Button style={styles.button} color = "#3BA776" mode="contained" onPress={() => {console.log("pressed")}} dark={true}>
          <Text  style={styles.text}>Report</Text>
        </Button>
    </View>
  )
}

export default HistoryTablet