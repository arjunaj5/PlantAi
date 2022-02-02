import React from 'react';
import { View,Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles'
import DefaultView from '../../Layouts/DefaultView';


const result=require('../../assets/images/PlantResult.png')


const HealthyPlantResult = () => {

    return (
      <DefaultView>
        <View style={styles.container}>
          <View>
            <Image
            source={result}
            />
            <Text style={styles.text}>Your Plant Is Healthy</Text>
          </View>
          <View>
            <Button style={styles.button} color = "#3BA776" mode="contained" onPress={() => console.log('Pressed')} dark={true}>
              <Text  style={styles.text}>Not sure?</Text>
            </Button>
            <Text style={styles.text}>Send your image for analysis</Text>
          </View>
        </View>
      </DefaultView>
    )
  }
  
  
  export default HealthyPlantResult;
  