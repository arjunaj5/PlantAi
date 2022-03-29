import React, { useEffect, useState } from 'react';
import DefaultView from '../../Layouts/DefaultView';
import DiseaseDetailsPage from '../../Components/DetailsPage/DiseaseDetailsPage';
import HealthyPlantResult from '../HealthyPlantResult';

import * as ImageManipulator from 'expo-image-manipulator';


import { postToImagekit } from './helper';


const ResultsPage = ({route, navigation}) => {
  const result = route.params.detectionResult
  const probability = result.probability
  const imageUri = route.params.imageUri
  const userDetails = route.params.userDetails
  const [ready, setReady] = useState(false)

  const [reportData, setReportData] = useState({})

  useEffect( async ()=> {
    const IMAGESIZE=128;
    const resizeImage = await ImageManipulator.manipulateAsync(imageUri, [{
      resize: {
        height: IMAGESIZE,
        width: IMAGESIZE
      }
    }],
    {
      base64: true,
      format: ImageManipulator.SaveFormat.PNG
    }
    );
    const base64 = resizeImage.base64;
    postToImagekit(base64, userDetails.user.id, result).then(response => {
      const reportData = {
        historyId: response.id
      }
      setReportData(reportData)
      setReady(true);
    })
  }, [])
  if(result.healthy || probability < 75)
  {
   return (
     <HealthyPlantResult img={imageUri} userDetails={userDetails} navigation={navigation} ready={ready} setReady={setReady} reportData={reportData} probability={probability} />
   ) 
  }
  return(

    <DefaultView navigation={navigation} userDetails={userDetails}>
        
        <DiseaseDetailsPage img={imageUri} name ={result.name} description={result.description} cure={result.cure}/>


    </DefaultView>

  ) 
}

export default ResultsPage;