import React from 'react';
import DefaultView from '../../Layouts/DefaultView';
import DetailsPage from '../../Components/DetailsPage';
import HealthyPlantResult from '../HealthyPlantResult';


const ResultsPage = ({route, navigation}) => {
  const result = route.params
  if(result.healthy)
  {
   return (
     <HealthyPlantResult img={result.image} />
   ) 
  }
  return(

    <DefaultView navigation={navigation}>
        
        <DetailsPage img={result.image} name ={result.name} description={result.description}/>


    </DefaultView>

  ) 
}

export default ResultsPage;