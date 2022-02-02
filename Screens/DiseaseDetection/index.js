import { Image, Text, View } from "react-native";
import React from "react";
import DefaultView from "../../Layouts/DefaultView";
import styles from "./styles";


// Images
const camera = require('../../assets/images/disease-detection/camera.png')
const gallery = require('../../assets/images/disease-detection/gallery.png')

// Global style
import globalStyles from "../../globalStyles";

const DiseaseDetection = () => {

  return (
    <DefaultView>
      <View style={styles.container}>
        <View style={[styles.imageContainer, globalStyles.boxShadow]} >
          <Image source={camera} style={styles.image} />
          <Text style={styles.text}> Open Camera </Text>
        </View>

        <View style={[styles.imageContainer, globalStyles.boxShadow]}>
          <Image source={gallery} style={styles.image} />
          <Text style={styles.text}> Upload from Gallery </Text>
        </View>
      </View>
    </DefaultView>

  )
}

export default DiseaseDetection;