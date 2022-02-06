import { Image, Text, View, Pressable, ActivityIndicator } from "react-native";
import { useState } from "react";
import React from "react";
import DefaultView from "../../Layouts/DefaultView";
import styles from "./styles";
import * as ImagePicker from 'expo-image-picker';


// Images
const camera = require('../../assets/images/disease-detection/camera.png')
const gallery = require('../../assets/images/disease-detection/gallery.png')

// Global style
import globalStyles from "../../globalStyles";

const detectDisease = async (result) => {

  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('photo', localUri );
  console.log(formData)

  const response =  await fetch('http://localhost:8000/detect-disease/', {
    method: 'POST',
    body: formData,
    header: {
      'content-type': 'multipart/form-data',
    },
  })

  return await response.json()
}

const DiseaseDetection = ({ navigation }) => {
  const [detecting, setDetecting] = useState(false)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.cancelled) {
      return
    }
    setDetecting(true)
    const detectionResult = await detectDisease(result)
    setDetecting(false)
    console.log(detectionResult)
    navigation.navigate('ResultsPage', { ... detectionResult, image: result.uri})

  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (result.cancelled) {
      return;
    }
    setDetecting(true)
    const detectionResult = await detectDisease(result)
    setDetecting(false)
    console.log(detectionResult)
    navigation.navigate('ResultsPage',{ ... detectionResult, image: result.uri})
  }


  return (
    <DefaultView>
      
      <ActivityIndicator  size="large" animating={detecting}/>
      <View style={styles.container}>
        <Pressable 
          style={[styles.imageContainer, globalStyles.boxShadow]}
          onPress={openCamera}
        >
          <Image source={camera} style={styles.image} />
          <Text style={styles.text}> Open Camera </Text>
        </Pressable>

        <Pressable 
          style={[styles.imageContainer, globalStyles.boxShadow]}
          onPress={pickImage}
        >
          <Image source={gallery} style={styles.image} />
          <Text style={styles.text}> Upload from Gallery </Text>
        </Pressable>
      </View>
    </DefaultView>

  )
}

export default DiseaseDetection;