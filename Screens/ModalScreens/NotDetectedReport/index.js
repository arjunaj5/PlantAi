import React from "react";
import { View , Text, TextInput} from "react-native";


import styles from './styles'

const NotDetectedReport = () => {

  return (
    <View>
      <Text style={styles.header}>Disease not detected</Text>
      <View style={styles.commentsContainer}>
        <Text>Comments:</Text>
        <TextInput 
          multiline
          numberOfLines={3}
          style={styles.commentsTextInput}
          maxLength={100}
        />
      </View>
    </View>
  )
}

export default NotDetectedReport;