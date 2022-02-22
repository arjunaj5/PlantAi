import React, { useState } from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import { Button } from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Styles
import styles from './styles'
import globalStyles from "../../../globalStyles";

//Helper
import { sendNewDiseaseData, sendNewCureData } from "./helper";

const HealthDepartmentModal = ({ selectedReport, hideModal, setSubmitted }) => {
  const detected = selectedReport.detected;
  const diseaseName = detected && selectedReport.disease;
  const plantName = detected && selectedReport.plant;
  const comments = selectedReport.comments
  // const comments = 'lorem ipsum dolor seit amit dola modd dolor limspu ipsum lorem lora dorea'
  const leafUrl = selectedReport.disease_url

  const [diseaseCorrectionCheck, setDiseaseCorrectionCheck] = useState(false)
  const [anotherCureCheck, setAnotherCureCheck] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)


  const [disease, setDisease] = useState('');
  const [diseaseDescription, setDiseaseDescription] = useState('');
  const [cure, setCure] = useState('');
  const [cureDescription, setCureDescription] = useState('');
  const [emptyError, setEmptyError] = useState(false)
  const [notSelectedError, setNotSelectedError] = useState(false)

  const handlePress = () => {
    if(detected){
      if(!anotherCureCheck && !diseaseCorrectionCheck){
        setNotSelectedError(true)
        return
      }
      else {
        setNotSelectedError(false)
      }
    }
    setButtonLoading(true)
    setEmptyError(false)
    if(!detected || detected && diseaseCorrectionCheck){
      const emptyFields =[disease, diseaseDescription, cure, cureDescription].filter((element) => element.length === 0)
      if(emptyFields.length === 0){
        setSubmitted(false)
        const body = {
          report: selectedReport.id,
          is_correction: detected,
          name: disease,
          description: diseaseDescription,
          cure_name: cure,
          cure_description: cureDescription 
        }
        sendNewDiseaseData(body).then((response) => {
          setSubmitted(true)
          setButtonLoading(false)
          hideModal()
          console.log(response)
        })
      }
      else {
        setEmptyError(true)
        setButtonLoading(false)
      }
    }
    else {
      if(anotherCureCheck){
        const emptyFields =[cure, cureDescription].filter((element) => element.length === 0)
      if(emptyFields.length === 0){
        setSubmitted(false)
        const body = {
          report: selectedReport.id,
          name: cure,
          description: cureDescription
        }
        sendNewCureData(body).then((response) => {
          setSubmitted(true)
          setButtonLoading(false);
          console.log(response)
          hideModal()
        })
      }
      else {
        setEmptyError(true)
        setButtonLoading(false)
      }
      }
    }
  }
  const correctionSection = detected ?
  (
    <View style={styles.subContainer}>
      <BouncyCheckbox 
        style={styles.checkbox}
        onPress={() => {
          setDiseaseCorrectionCheck((value) => !value)
          setAnotherCureCheck(false)
          setEmptyError(false)
          setNotSelectedError(false)
        }}
        iconStyle={{ borderColor: "#3BA776" }}
        fillColor="#3BA776"
        text="Disease Correction"
        textStyle={{
          textDecorationLine: "none",
        }}
        disableBuiltInState
        isChecked={diseaseCorrectionCheck}
      />
      {diseaseCorrectionCheck && (
        <>
          <View style={styles.commentsContainer}>
            <Text>Disease Name:</Text>
              <TextInput
              numberOfLines={1}
              style={styles.inputBox}
              maxLength={30}
              value={disease}
              onChangeText={setDisease}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Description:</Text>
              <TextInput
              style={styles.inputBox}
              numberOfLines={5}
              maxLength={300}
              value={diseaseDescription}
              onChangeText={setDiseaseDescription}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Cure:</Text>
              <TextInput
              numberOfLines={1}
              style={styles.inputBox}
              maxLength={30}
              value={cure}
              onChangeText={setCure}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Cure Description:</Text>
              <TextInput
              style={styles.inputBox}
              numberOfLines={5}
              maxLength={300}
              value={cureDescription}
              onChangeText={setCureDescription}
              />
          </View>
          <Text style={styles.errorText} >{ emptyError && 'All fields are required' }</Text>
        </>
      )}
      <BouncyCheckbox
        style={styles.checkbox}
        onPress={() => {
          setAnotherCureCheck((value) => !value)
          setDiseaseCorrectionCheck(false)
          setEmptyError(false)
          setNotSelectedError(false)
        }}
        iconStyle={{ borderColor: "#3BA776" }}
        fillColor="#3BA776"
        text="Another Cure?"
        textStyle={{
          textDecorationLine: "none",
        }}
        disableBuiltInState
        isChecked={anotherCureCheck}
      />
      {anotherCureCheck && (
        <>
          <View style={styles.commentsContainer}>
            <Text>Cure:</Text>
              <TextInput
              numberOfLines={1}
              style={styles.inputBox}
              maxLength={30}
              value={cure}
              onChangeText={setCure}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Description:</Text>
              <TextInput
              style={styles.inputBox}
              numberOfLines={5}
              maxLength={300}
              value={cureDescription}
              onChangeText={setCureDescription}
              />
          </View>
          <Text style={styles.errorText}>{ emptyError && 'All fields are required' }</Text>
        </>
      )}
      <Text style={styles.errorText}>{ notSelectedError && 'Select correction or new cure' }</Text>
    </View>
  ) :
  (
    <View>
       <>
          <View style={styles.commentsContainer}>
            <Text>Disease Name:</Text>
              <TextInput
              numberOfLines={1}
              style={styles.inputBox}
              maxLength={30}
              value={disease}
              onChangeText={setDisease}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Description:</Text>
              <TextInput
              style={styles.inputBox}
              numberOfLines={5}
              maxLength={300}
              value={diseaseDescription}
              onChangeText={setDiseaseDescription}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Cure:</Text>
              <TextInput
              numberOfLines={1}
              style={styles.inputBox}
              maxLength={30}
              value={cure}
              onChangeText={setCure}
              />
          </View>
          <View style={styles.commentsContainer}>
            <Text>Cure Description:</Text>
              <TextInput
              style={styles.inputBox}
              numberOfLines={5}
              maxLength={300}
              value={cureDescription}
              onChangeText={setCureDescription}
              />
          </View>
          <Text style={styles.errorText} >{ emptyError && 'All fields are required' }</Text>
        </>
    </View>
  )

  const details = detected && (
    <>
      <View style={styles.commentsContainer}>
        <Text>Detected Disease:  <Text style={styles.detailText}> {diseaseName} </Text> </Text>
      </View>

      <View style={styles.commentsContainer}>
        <Text>Name of plant: <Text style={styles.detailText} > {plantName} </Text> </Text>
      </View>
    </>
  )
  return (
    <ScrollView style={styles.container} contentContainerStyle={{minHeight:'100%', paddingVertical: 20,}}>
      <Text style={styles.header} >Disease Not {detected ? 'Cured' : 'Detected'}</Text>

      <View >

        {details}
        <View style={styles.commentsContainer}>
          <Text>Comments: </Text>
          <View style={{maxWidth: 200}} >
            <Text>{ comments }</Text>
          </View>
        </View>
      </View>

      <Image
        source = {{uri: leafUrl}}
        style={styles.leafImage}
      >
      </Image>

      {correctionSection}

      <Button
        mode="contained"
        color="#3BA776"
        onPress={handlePress}
        dark={true}
        style={[globalStyles.button,{alignSelf:"flex-end", position:"relative", bottom: 0}]}
        loading={buttonLoading}
        >
        <Text style={globalStyles.buttonText}> Reply </Text>
      </Button>
    </ScrollView>
  )
}

export default HealthDepartmentModal;