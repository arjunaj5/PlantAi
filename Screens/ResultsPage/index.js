import React, { useEffect, useState } from 'react';
import DefaultView from '../../Layouts/DefaultView';
import DiseaseDetailsPage from '../../Components/DetailsPage/DiseaseDetailsPage';
import HealthyPlantResult from '../HealthyPlantResult';

import { postToImagekit } from './helper';


const ResultsPage = ({route, navigation}) => {
  const result = route.params.detectionResult
  const imageUri = route.params.imageUri
  const userDetails = route.params.userDetails
  const [ready, setReady] = useState(false)

  const [reportData, setReportData] = useState({})

  useEffect(()=> {
    postToImagekit(imageUri, userDetails.user.id, result).then(response => {
      console.log("posted to imagekit")
      console.log(response)
      const reportData = {
        historyId: response.id
      }
      setReportData(reportData)
      setReady(true);
    })
  }, [])
  if(result.healthy)
  {
   return (
     <HealthyPlantResult img={imageUri} userDetails={userDetails} navigation={navigation} ready={ready} setReady={setReady} reportData={reportData} />
   ) 
  }
  return(

    <DefaultView navigation={navigation} userDetails={userDetails}>
        
        <DiseaseDetailsPage img={imageUri} name ={result.name} description={result.description} cure={result.cure}/>


    </DefaultView>

  ) 
}

export default ResultsPage;