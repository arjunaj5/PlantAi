import React from 'react';
import styles from './styles';
import DefaultView from '../../Layouts/DefaultView';
import DetailsPage from '../../Components/DetailsPage';


const PlantPage = ({route, navigation}) => {
  
  const {image_url, name, description} = route.params
  return(

    <DefaultView navigation={navigation} >
        
        <DetailsPage img={image_url} name={name} description={description}/>


    </DefaultView>

  ) 
}

export default PlantPage;