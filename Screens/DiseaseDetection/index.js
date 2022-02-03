import { Image, Text, View, Pressable } from "react-native";
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

const detectDisease = async (uri) => {

  let filename = uri.split('/').pop();

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  formData.append('photo', { uri: uri, name: filename, type });

  return await fetch(YOUR_SERVER_URL, {
    method: 'POST',
    body: formData,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
}

const DiseaseDetection = () => {

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri);
    }
  }


  return (
    <DefaultView>
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