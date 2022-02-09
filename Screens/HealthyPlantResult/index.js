import { useState } from 'react';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Portal, Provider, Modal } from 'react-native-paper';
import styles from './styles'
import DefaultView from '../../Layouts/DefaultView';

// Modal 
import DefaultModal from '../../Layouts/DefaultModal';

// Modal Screen
import NotDetectedReport from '../ModalScreens/NotDetectedReport';




const HealthyPlantResult = ({ img, userDetails, navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

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
          <Text style={styles.text}>Your Plant Is Healthy</Text>
        </View>
        <View>
          <Button style={styles.button} color = "#3BA776" mode="contained" onPress={showModal} dark={true}>
            <Text  style={styles.text}>Not sure?</Text>
          </Button>
          <Text style={styles.text}>Send your image for analysis</Text>
        </View>
      </View>
          <DefaultModal hideModal={hideModal} modalVisible={modalVisible} >
            <NotDetectedReport imageUrl={img} />
          </DefaultModal>
    </DefaultView>
  )
  }
  
  
  export default HealthyPlantResult;
  