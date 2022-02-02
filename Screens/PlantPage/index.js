import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import DefaultView from '../../Layouts/DefaultView';
import DetailsPage from '../../Components/DetailsPage';

const newsPic = require('../../assets/images/PlantPage/Pic.png')

const PlantPage = () => {
  return(

    <DefaultView>
        
        <DetailsPage img={newsPic} heading={"Plant Name"}/>


    </DefaultView>

  ) 
}

export default PlantPage;