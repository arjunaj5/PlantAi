import React from 'react';
import { View, Image, Text } from 'react-native';
import DefaultView from '../../Layouts/DefaultView';
import DetailsPage from '../../Components/DetailsPage';


const ResultsPage = ({route, navigation}) => {
  const result = route.params
  console.log(result)
  return(

    <DefaultView>
        
        <DetailsPage img={result.image} name ={result.name} description={result.description}/>


    </DefaultView>

  ) 
}

export default ResultsPage;