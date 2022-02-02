import React from 'react';
import { View, Image, Text } from 'react-native';
import DefaultView from '../../Layouts/DefaultView';
import DetailsPage from '../../Components/DetailsPage';

const newsPic = require('../../assets/images/ResultsPage/pic.png')

const ResultsPage = () => {
  return(

    <DefaultView>
        
        <DetailsPage img={newsPic} heading={"Name of Disease"}/>


    </DefaultView>

  ) 
}

export default ResultsPage;