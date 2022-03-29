import { useState } from 'react';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles'
import DefaultView from '../../Layouts/DefaultView';
import { PROBABILITY } from '../../apiroot';

// Modal 
import DefaultModal from '../../Layouts/DefaultModal';

// Modal Screen
import NotDetectedReport from '../ModalScreens/NotDetectedReport';




const HealthyPlantResult = ({ img, userDetails, navigation, ready, setReady, reportData, probability }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const message = (
    probability < PROBABILITY ? 'Could not detect disease': 'Your Plant Is Healthy'
  )

  const hideModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  return (
    <DefaultView userDetails={userDetails} navigation={navigation}>
      <View style={styles.container}>
        <View>
          <Image
          source={{uri: img}}
          style={styles.image}
          />
          <Text style={styles.text}>{message}</Text>
        </View>
        <View>
          <Button style={styles.button} color = "#3BA776" mode="contained" onPress={showModal} dark={true}>
            <Text  style={styles.text}>Not sure?</Text>
          </Button>
          <Text style={styles.text}>Send your image for analysis</Text>
        </View>
      </View>
          <DefaultModal hideModal={hideModal} modalVisible={modalVisible} >
            <NotDetectedReport imageUrl={img} ready={ready} setReady={setReady} reportData={reportData} hideModal={hideModal} />
          </DefaultModal>
    </DefaultView>
  )
  }
  
  
  export default HealthyPlantResult;
  