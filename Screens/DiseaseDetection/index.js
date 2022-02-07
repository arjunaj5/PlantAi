import { Image, Text, View, Pressable, ActivityIndicator } from "react-native";
import { useState } from "react";
import React from "react";
import DefaultView from "../../Layouts/DefaultView";
import styles from "./styles";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { API_ROOT } from "../../apiroot";


// Images
const camera = require('../../assets/images/disease-detection/camera.png')
const gallery = require('../../assets/images/disease-detection/gallery.png')

// Global style
import globalStyles from "../../globalStyles";

const detectDisease = async (result, userDetails) => {

  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;
  const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });


  let formData = new FormData();
  formData.append('photo', base64 );
  formData.append('userId', userDetails.user.id)

  const response =  await fetch( API_ROOT + '/detect-disease/', {
    method: 'POST',
    body: formData,
    header: {
      'content-type': 'multipart/form-data',
    },
  })

  return await response.json()
}

const DiseaseDetection = ({ navigation, route }) => {
  const [detecting, setDetecting] = useState(false)
  const [pointerEvents, setPointerEvents] = useState('auto')

  const userDetails = route.params

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
    setPointerEvents('none')
    const detectionResult = await detectDisease(result, userDetails)
    setDetecting(false)
    setPointerEvents('auto')
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


    if (result.cancelled) {
      return;
    }
    setDetecting(true)
    setPointerEvents('none')
    const detectionResult = await detectDisease(result, userDetails)
    setDetecting(false)
    setPointerEvents('auto')
    navigation.navigate('ResultsPage',{ ... detectionResult, image: result.uri})
  }


  return (
    <DefaultView navigation={navigation}>
      <ActivityIndicator  size="large"  animating={detecting} color="#3BA776" style={styles.activityIndicator} />

      <View pointerEvents={pointerEvents} style={styles.container}>
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