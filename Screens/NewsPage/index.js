import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import DefaultView from '../../Layouts/DefaultView';
import DetailsPage from '../../Components/DetailsPage';

const newsPic = require('../../assets/images/NewsPage/Newspic.png')

const NewsPage = () => {
  return(

    <DefaultView>
        
        <DetailsPage img={newsPic} heading={"News Topic"}/>


    </DefaultView>

  ) 
}

export default NewsPage;
