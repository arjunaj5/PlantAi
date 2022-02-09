import React from "react";
import { View , Text, Image, TextInput} from "react-native";
import { Button } from "react-native-paper";


import styles from './styles';
import globalStyles from "../../../globalStyles";





const NotDetectedReport = ({imageUrl}) => {

  return (
    <View style={{height: '100%'}}>
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

      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.leafImage} />
      </View>


      <Button
        mode="contained"
        color="#3BA776"
        onPress={() => console.log('Pressed')}
        dark={true}
        style={[globalStyles.button,{alignSelf:"flex-end"}]}
      >
        <Text style={globalStyles.buttonText}> Report </Text>
      </Button>
    </View>
  )
}

export default NotDetectedReport;