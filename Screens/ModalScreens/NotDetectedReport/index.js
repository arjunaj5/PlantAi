import React, { useState } from "react";
import { View , Text, Image, TextInput, ToastAndroid} from "react-native";
import { Button } from "react-native-paper";


import styles from './styles';
import globalStyles from "../../../globalStyles";
import { sendReport } from "../../UserDashboard/helper";



const NotDetectedReport = ({imageUrl, ready, setReady, reportData, hideModal}) => {
  const [comments, setComments] = useState('')

  const handlePress = () => {
    setReady(false)
    sendReport(reportData.historyId, 'submitted', comments).then((response)=> {
      setReady(true)
      ToastAndroid.show('Report sent successfully!', ToastAndroid.SHORT);
      hideModal();
    })
  }


  return (
    <View style={{height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    }}>
      <Text style={styles.header}>Disease not detected</Text>
      <View style={styles.commentsContainer}>
        <Text>Comments:</Text>
        <TextInput 
          multiline
          numberOfLines={3}
          style={styles.commentsTextInput}
          maxLength={100}
          value={comments}
          onChangeText={setComments}
        />
      </View>

      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.leafImage} />
      </View>


      <Button
        mode="contained"
        color="#3BA776"
        onPress={handlePress}
        dark={true}
        style={[globalStyles.button,{alignSelf:"flex-end"}]}
        loading={!ready}
        disabled={!ready}
      >
        <Text style={globalStyles.buttonText}> Report </Text>
      </Button>
    </View>
  )
}

export default NotDetectedReport;